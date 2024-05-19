import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { VendorFacilityType } from '../types/facility';

@Schema({
  timestamps: true,
})
export class Vendor {
  @Prop({ required: true })
  locationId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: String, enum: VendorFacilityType })
  facilityType: VendorFacilityType;

  @Prop()
  locationDescription: string;

  @Prop()
  foodItems: string;

  @Prop()
  latitude: string;

  @Prop()
  longitude: string;

  @Prop()
  daysHours: string;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
