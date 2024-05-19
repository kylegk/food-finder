import { Test, TestingModule } from '@nestjs/testing';
import { VendorsService } from './vendors.service';
import { getModelToken } from '@nestjs/mongoose';
import { Vendor } from './schemas/vendor.schema';
import mongoose, { Model } from 'mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('VendorsService', () => {
  let service: VendorsService;
  let model: Model<Vendor>;

  const mockVendorsService = {
    findById: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  const mockVendor = {
    _id: 'fake-object-id',
    locationId: '12345',
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a vendor', async () => {
      const newVendor = {
        _id: 'another-fake-object-id',
        locationId: '123456',
        name: 'New Taco Truck',
        facilityType: 'truck',
        locationDescription: 'The newest taco truck on the planet',
        foodItems: 'tacos',
        latitude: '-12345',
        longitude: '-12345',
        daysHours: '24/7/365',
      };
      jest.spyOn(model, 'create').mockImplementation(() => newVendor as any);
      const result = await service.create(newVendor);
      expect(result.name).toEqual(newVendor.name);
    });
  });

  describe('findByLocationId', () => {
    it('should find a vendor by location id', async () => {
      jest.spyOn(model, 'findOne').mockResolvedValue(mockVendor);
      const result = await service.findByLocationId(mockVendor.locationId);
      expect(result).toEqual(mockVendor);
    });
  });

  describe('findAll', () => {
    it('should return an array of vendors', async () => {
      jest.spyOn(model, 'find').mockImplementation(
        () =>
          ({
            limit: () => ({
              skip: () => ({
                select: jest.fn().mockResolvedValue([mockVendor]),
              }),
            }),
          }) as any,
      );

      const result = await service.findAll({});
      expect(model.find).toHaveBeenCalledWith();
      expect(result).toEqual([mockVendor]);
    });
  });

  describe('update', () => {
    it('should update and return a vendor', async () => {
      const updatedTruckName = 'Updated Truck Name';
      const vendor = { ...mockVendor, name: updatedTruckName };

      jest.spyOn(model, 'findOne').mockResolvedValue(mockVendor);
      jest.spyOn(model, 'findByIdAndUpdate').mockImplementation(
        () =>
          ({
            select: () => jest.fn().mockResolvedValue(mockVendor),
          }) as any,
      );

      const result = await service.update(mockVendor.locationId, vendor as any);

      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(
        mockVendor._id,
        vendor,
        {
          new: true,
          runValidators: true,
        },
      );
    });

    it('should fail when the locationId does not exist (vendor not found)', async () => {
      const updatedTruckName = 'Updated Truck Name';
      const vendor = { name: updatedTruckName };

      jest.spyOn(model, 'findOne').mockResolvedValue(undefined);
      jest.spyOn(model, 'find').mockImplementation(
        () =>
          ({
            select: () => jest.fn().mockResolvedValue([mockVendor]),
          }) as any,
      );

      try {
        await service.update(mockVendor.locationId, vendor as any);
      } catch (e) {
        expect(e.message).toEqual('Not Found');
      }
    });
  });

  describe('remove', () => {
    it('should delete a vendor', async () => {
      jest.spyOn(model, 'findOne').mockResolvedValue(mockVendor);
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValue(mockVendor._id);
      const result = await service.remove(mockVendor.locationId);
      expect(model.findByIdAndDelete).toHaveBeenCalledWith(mockVendor._id);
    });

    it('should fail when the locationId does not exist (vendor not found)', async () => {
      jest.spyOn(model, 'findOne').mockResolvedValue(undefined);
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValue(mockVendor._id);
      try {
        await service.remove(mockVendor.locationId);
      } catch (e) {
        expect(e.message).toEqual('Not Found');
      }
    });
  });
});
