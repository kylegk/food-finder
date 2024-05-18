import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor } from './schemas/vendor.schema';
import { Model, isValidObjectId } from 'mongoose';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class VendorsService {
  constructor(
    @InjectModel(Vendor.name)
    private vendorModel: Model<Vendor>,
  ) {}

  async getCount(): Promise<number> {
    const res = await this.vendorModel.find();
    return res.length;
  }

  async findAll(query: Query): Promise<Vendor[]> {
    const page = Number(query.page) ?? 1;
    const limit = Number(query.limit) || 10;
    const skip = limit * (page - 1);

    return await this.vendorModel.find().limit(limit).skip(skip);
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
