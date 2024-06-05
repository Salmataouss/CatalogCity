import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coordinates, CoordinatesSchema } from 'src/country/coordinates.schema';

@Schema()
export class Country extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [String] })
  images: string[];

  @Prop({ type: CoordinatesSchema, required: true })
  coordinates: Coordinates;

  @Prop({ required: true })
  isFavourite: boolean;

  @Prop({ type: [String], required: true })
  searchkey: string[];

  @Prop({ required: true })
  status: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
