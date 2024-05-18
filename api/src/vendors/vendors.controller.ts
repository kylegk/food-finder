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

@Controller('vendors')
export class VendorsController {
  constructor(private vendorsService: VendorsService) {}

  @Public()
  @Get()
  async getAllVendors(): Promise<Vendor[]> {
    return this.vendorsService.findAll();
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
  async removeBook(
    @Param('id')
    id: string,
  ): Promise<void> {
    return this.vendorsService.remove(id);
  }
}
