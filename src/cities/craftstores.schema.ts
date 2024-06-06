import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coordinates, CoordinatesSchema } from 'src/cities/coordinates.schema';

@Schema()
export class CraftStore extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true, type: Object })
  title: { en: string, fr: string, arSA: string };

  @Prop({ required: true, type: Object })
  country: { en: string, fr: string, arSA: string };

  @Prop({ required: true, type: Object })
  description: { en: string, fr: string, arSA: string };

  @Prop({ required: true, type: Object })
  address: { en: string, fr: string, arSA: string };

  @Prop({ required: true, type: [String] })
  images: string[];

  @Prop({ required: true, type: CoordinatesSchema })
  coordinates: Coordinates;

  @Prop({ required: true })
  isFavourite: boolean;
}

export const CraftStoreSchema = SchemaFactory.createForClass(CraftStore);
