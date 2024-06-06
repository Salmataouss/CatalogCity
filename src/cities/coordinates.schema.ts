import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Coordinates extends Document {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lon: number;
}

export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);
