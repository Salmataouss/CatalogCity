import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MultilingualText extends Document {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  fr: string;

  @Prop({ required: true })
  arSA: string;
}

export const MultilingualTextSchema = SchemaFactory.createForClass(MultilingualText);
