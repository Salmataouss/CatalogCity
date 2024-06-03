// craftstore.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coordinates, CoordinatesSchema } from './coordinates.schema';

@Schema()
export class CraftStore extends Document {
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

  @Prop({ required: true })
  images: string[];

  @Prop({ required: true, type: CoordinatesSchema })
  coordinates: Coordinates;

  @Prop({ required: true })
  isFavourite: boolean;
}

export const CraftStoreSchema = SchemaFactory.createForClass(CraftStore);
