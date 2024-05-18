import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor } from './schemas/vendor.schema';
import { Model, isValidObjectId } from 'mongoose';
import { Query } from 'express-serve-static-core';
import { CreateVendorDto } from './dto/create-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(
    @InjectModel(Vendor.name)
    private vendorModel: Model<Vendor>,
  ) {}

  async findAll(): Promise<Vendor[]> {
    return await this.vendorModel.find();
  }

  async create(vendor: CreateVendorDto): Promise<Vendor> {
    return await this.vendorModel.create(vendor);
  }

  async findById(id: string): Promise<Vendor> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException();
    }

    const vendor = await this.vendorModel.findById(id);
    if (!vendor) {
      throw new NotFoundException();
    }

    return vendor;
  }

  async update(id: string, vendor: Vendor): Promise<Vendor> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException();
    }

    return await this.vendorModel.findByIdAndUpdate(id, vendor, {
      new: true,
      runValidators: true,
    });
  }

  async remove(id: string): Promise<void> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException();
    }

    await this.vendorModel.findByIdAndDelete(id);
  }
}
