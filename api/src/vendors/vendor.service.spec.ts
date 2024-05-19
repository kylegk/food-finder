import { Test, TestingModule } from '@nestjs/testing';
import { VendorsService } from './vendors.service';
import { getModelToken } from '@nestjs/mongoose';
import { Vendor } from './schemas/vendor.schema';
import mongoose, { Model } from 'mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';

// TODO: Add test for pagination

describe('VendorsService', () => {
  let service: VendorsService;
  let model: Model<Vendor>;

  const mockVendorsService = {
    findById: jest.fn(),
    find: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  const mockVendor = {
    _id: '664908725c678e1f4f0abaca',
    name: 'Taco Truck',
    facilityType: 'truck',
    locationDescription: 'The best taco truck on the planet',
    foodItems: 'tacos, tacos, and more tacos',
    latitude: '-12345',
    longitude: '-12345',
    daysHours: '24/7/365',
    createdAt: '2024-05-18T19:58:42.303Z',
    updatedAt: '2024-05-18T19:58:42.303Z',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VendorsService,
        { provide: getModelToken(Vendor.name), useValue: mockVendorsService },
      ],
    }).compile();

    service = module.get<VendorsService>(VendorsService);
    model = module.get<Model<Vendor>>(getModelToken(Vendor.name));
  });

  describe('findById', () => {
    it('should find a vendor by Id', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(mockVendor);
      const result = await service.findById(mockVendor._id);
      expect(model.findById).toHaveBeenCalledWith(mockVendor._id);
      expect(result).toEqual(mockVendor);
    });

    it('should throw BadRequestExepction if an invalid vendor id is provided', async () => {
      const id = 'this-is-an-invalid-id';

      const isValidObjectIdMock = jest
        .spyOn(mongoose, 'isValidObjectId')
        .mockReturnValue(false);

      await expect(service.findById(id)).rejects.toThrow(BadRequestException);
      expect(isValidObjectIdMock).toHaveBeenCalledWith(id);
      isValidObjectIdMock.mockRestore();
    });

    it('should throw NotFoundException if a vendor Id is not found', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(null);
      await expect(service.findById(mockVendor._id)).rejects.toThrow(
        NotFoundException,
      );
      expect(model.findById).toHaveBeenCalledWith(mockVendor._id);
    });
  });

  describe('findAll', () => {
    it('should return an array of vendors', async () => {
      jest.spyOn(model, 'find').mockImplementation(
        () =>
          ({
            limit: () => ({
              skip: jest.fn().mockResolvedValue([mockVendor]),
            }),
          }) as any,
      );

      const result = await service.findAll({});
      expect(model.find).toHaveBeenCalledWith();
      expect(result).toEqual([mockVendor]);
    });
  });

  describe('create', () => {
    it('should create a vendor', async () => {
      const newTruckName = 'New Taco Truck';
      const createVendor = {
        name: newTruckName,
        facilityType: 'truck',
        locationDescription: 'The newest taco truck on the planet',
        foodItems: 'tacos',
        latitude: '-12345',
        longitude: '-12345',
        daysHours: '24/7/365',
      };
      const vendor = { name: newTruckName };

      const result = await service.create(createVendor);
    });
  });

  describe('update', () => {
    it('should update and return a vendor', async () => {
      const updatedTruckName = 'Updated Truck Name';
      const updatedVendor = { ...mockVendor, name: updatedTruckName };
      const vendor = { name: updatedTruckName };

      jest.spyOn(model, 'findByIdAndUpdate').mockResolvedValue(updatedVendor);

      const result = await service.update(mockVendor._id, vendor as any);

      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(
        mockVendor._id,
        vendor,
        {
          new: true,
          runValidators: true,
        },
      );

      expect(result.name).toEqual(vendor.name);
    });
  });

  describe('remove', () => {
    it('should delete a vendor', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValue(null);

      const result = await service.remove(mockVendor._id);

      expect(model.findByIdAndDelete).toHaveBeenCalledWith(mockVendor._id);

      expect(result).toEqual(undefined);
    });
  });
});
