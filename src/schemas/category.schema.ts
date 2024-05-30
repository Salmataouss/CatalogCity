import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ type: Object, of: String })
  name: Map<string, string>;

  @Prop({ required: true })
  media: string;

  @Prop({ default: Date.now, required: true })
  added_at: Date;

  @Prop({ required: true })
  code_lang: string;

  // Getter method to retrieve the name based on a given language code
  getNameByLang(lang: string): string {
    return this.name.get(lang) || 'Name not available for this language';
  }
}

export const CategorySchema = SchemaFactory.createForClass(Category);
