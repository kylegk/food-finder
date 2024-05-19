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
export const EXCLUDE_FIELDS = '-_id -__v';

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

    // TODO: This should use a different set of fields

    return await this.vendorModel
      .find()
      .limit(limit)
      .skip(skip)
      .select(EXCLUDE_FIELDS);
  }

  async create(vendor: CreateVendorDto): Promise<Vendor> {
    const existingLocation = await this.vendorModel.findOne({
      locationId: vendor.locationId,
    });
    if (existingLocation) {
      throw new BadRequestException('vendor location already exists');
    }

    try {
      return await this.vendorModel.create(vendor);
    } catch (e) {
      throw new BadRequestException(e?.message);
    }
  }

  async findByLocationId(locationId: string): Promise<Vendor> {
    const vendor = this.vendorModel.findOne({ locationId });
    if (!vendor) {
      throw new NotFoundException();
    }

    return vendor;
  }

  async update(locationId: string, vendor: Vendor): Promise<Vendor> {
    const vendorToUpdate = await this.vendorModel.findOne({ locationId });
    if (!vendorToUpdate) {
      throw new NotFoundException();
    }

    return await this.vendorModel
      .findByIdAndUpdate(vendorToUpdate['_id'], vendor, {
        new: true,
        runValidators: true,
      })
      .select(EXCLUDE_FIELDS);
  }

  async remove(locationId: string): Promise<void> {
    const vendorToRemove = await this.vendorModel.findOne({ locationId });
    if (!vendorToRemove) {
      throw new NotFoundException();
    }

    await this.vendorModel.findByIdAndDelete(vendorToRemove['_id']);
  }
}
