import { VendorFacilityType } from '../types/facility';

export class CreateVendorDto {
  locationId: string;
  name: string;
  facilityType: VendorFacilityType;
  locationDescription: string;
  foodItems: string;
  latitude: string;
  longitude: string;
  daysHours: string;
}
