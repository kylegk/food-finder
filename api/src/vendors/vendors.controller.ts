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
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Public } from '../auth/decorators/public.decorator';

// TODO: Add guards for appropriate routes (add, edit, rate)

@Controller('vendors')
export class VendorsController {
  constructor(private vendorsService: VendorsService) {}

  @Public()
  @Get()
  async getAllVendors(): Promise<Vendor[]> {
    return this.vendorsService.findAll();
  }

  @Post('vendors/add')
  async addVendor(
    @Body()
    vendor: CreateVendorDto,
  ): Promise<Vendor> {
    return this.vendorsService.create(vendor);
  }

  // @Post('book/add')
  // async createBook(
  //   @Body()
  //   book: CreateBookDto,
  // ): Promise<Book> {
  //   return this.bookService.create(book);
  // }

  // @Get('book/details/:id')
  // async getBookDetails(
  //   @Param('id')
  //   id: string,
  // ): Promise<Book> {
  //   return this.bookService.findById(id);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Put('book/update/:id')
  // async updateBook(
  //   @Param('id')
  //   id: string,
  //   @Body()
  //   book: UpdateBookDto,
  // ): Promise<Book> {
  //   return this.bookService.update(id, book);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Delete('book/remove/:id')
  // async removeBook(
  //   @Param('id')
  //   id: string,
  // ): Promise<void> {
  //   return this.bookService.remove(id);
  // }
}
