import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVendorDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  facilityType: string;

  @IsNotEmpty()
  @IsString()
  locationDescription: string;

  @IsNotEmpty()
  @IsString()
  foodItems: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  daysHours: string;
}
