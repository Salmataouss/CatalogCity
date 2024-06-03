// thing-to-do.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coordinates } from 'src/city1/coordinates.schema'; // Ensure you have Coordinates schema as well

@Schema()
export class ThingToDo extends Document {
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

  @Prop({ required: true, type: Coordinates })
  coordinates: Coordinates;

  @Prop({ required: true })
  isFavourite: boolean;
}

export const ThingToDoSchema = SchemaFactory.createForClass(ThingToDo);
