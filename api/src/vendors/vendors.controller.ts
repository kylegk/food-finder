import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { Vendor } from './schemas/vendor.schema';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Public } from '../auth/decorators/public.decorator';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { PaginatedVendor } from './types/paginated.type';

@Controller('vendors')
export class VendorsController {
  constructor(private vendorsService: VendorsService) {}

  @Public()
  @Get()
  async getAllVendors(
    @Query() query: ExpressQuery,
  ): Promise<Vendor[] | PaginatedVendor> {
    if (Object.keys(query).length) {
      const total = await this.vendorsService.getCount();
      const data = await this.vendorsService.findAll(query);
      const limit = Number(query.limit) || 10;
      const totalPages = Math.ceil(total / limit);

      return {
        count: total,
        totalPages: totalPages,
        vendors: data,
      };
    }

    return this.vendorsService.findAll(query);
  }

  @Public()
  @Get('vendor/:id')
  async getVendorDetails(
    @Param('id')
    id: string,
  ): Promise<Vendor> {
    return this.vendorsService.findById(id);
  }

  @Post('vendor')
  async addVendor(
    @Body()
    vendor: CreateVendorDto,
  ): Promise<Vendor> {
    return this.vendorsService.create(vendor);
  }

  @Put('vendor/:id')
  async updateVendor(
    @Param('id')
    id: string,
    @Body()
    vendor: UpdateVendorDto,
  ): Promise<Vendor> {
    return this.vendorsService.update(id, vendor);
  }

  @Delete('vendor/:id')
  async removeVendor(
    @Param('id')
    id: string,
  ): Promise<void> {
    return this.vendorsService.remove(id);
  }
}
