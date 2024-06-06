import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coordinates, CoordinatesSchema } from 'src/country/coordinates.schema';

export type CountryDocument = Country & Document;

@Schema()
export class Country {
  @Prop({ type: Map, of: String })
  title: Map<string, string>;

  @Prop({ type: Map, of: String })
  country: Map<string, string>;

  @Prop({ type: Map, of: String })
  address: Map<string, string>;

  @Prop({ type: Map, of: String })
  description: Map<string, string>;

  @Prop([String])
  images: string[];

  @Prop({ type: CoordinatesSchema, required: true }) 
  coordinates: Coordinates;

  @Prop({ default: false })
  isFavourite: boolean;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
