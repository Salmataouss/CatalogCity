import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coordinates, CoordinatesSchema } from 'src/cities/coordinates.schema';
import { ThingToDo, ThingToDoSchema } from 'src/cities/things.schema';
import { Restaurant, RestaurantSchema } from 'src/cities/restaurants.schema';
import { Hotel, HotelSchema } from 'src/cities/hotels.schema';
import { CraftStore, CraftStoreSchema } from 'src/cities/craftstores.schema';

@Schema()
export class City2 extends Document {
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

  @Prop()
  video: string;

  @Prop({ required: true, type: [String] })
  images: string[];

  @Prop({ required: true, type: CoordinatesSchema })
  coordinates: Coordinates;

  @Prop({ required: true })
  isFavourite: boolean;

  @Prop({ required: true, type: [String] })
  searchkey: string[];

  @Prop({ required: true })
  status: string;

  @Prop({ required: true, type: [ThingToDoSchema] })
  thingstodo: ThingToDo[];

  @Prop({ required: true, type: [RestaurantSchema] })
  restaurants: Restaurant[];

  @Prop({ required: true, type: [HotelSchema] })
  hotels: Hotel[];

  @Prop({ required: true, type: [CraftStoreSchema] })
  craftstores: CraftStore[];

}

export const CitySchema = SchemaFactory.createForClass(City2);
