import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';

// TODO: Add test for pagination

describe('UsersService', () => {
  let service: UsersService;
  let model: Model<User>;

  const mockUsersService = {
    findById: jest.fn(),
    // find: jest.fn(),
    // create: jest.fn(),
    // findByIdAndUpdate: jest.fn(),
    // findByIdAndDelete: jest.fn(),
  };

  const mockUser = {
    _id: '664908725c678e1f4f0abaca',
    firstName: 'John',
    lastName: 'Doe',
    email: 'fake@email.com',
    password: 'password',
    createdAt: '2024-05-18T19:50:41.303Z',
    updatedAt: '2024-05-18T19:50:41.303Z',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getModelToken(User.name), useValue: mockUsersService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<Model<User>>(getModelToken(User.name));
  });

  describe('findById', () => {
    it('should find a user by Id', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(mockUser);
      const result = await service.findById(mockUser._id);
      expect(model.findById).toHaveBeenCalledWith(mockUser._id);
      expect(result).toEqual(mockUser);
    });
  });
});
