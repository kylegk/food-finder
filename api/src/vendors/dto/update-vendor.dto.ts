import { IsOptional, IsString } from 'class-validator';

export class UpdateVendorDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  facilityType: string;

  @IsOptional()
  @IsString()
  locationDescription: string;

  @IsOptional()
  @IsString()
  foodItems: string;

  @IsOptional()
  @IsString()
  latitude: string;

  @IsOptional()
  @IsString()
  longitude: string;

  @IsOptional()
  @IsString()
  daysHours: string;
}
