import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Vendor {
  @Prop({ required: true })
  locationId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  facilityType: string;

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
