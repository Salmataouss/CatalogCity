import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;
  @Prop()
  code: string;
  @Prop()
  image: string;
  @Prop()
  url: string;
  
}

export const UserSchema = SchemaFactory.createForClass(User);
