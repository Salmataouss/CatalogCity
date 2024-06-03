import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
/////////
@Schema()
class Coordinates {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lon: number;
}
const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);
///////

@Schema()
class ThingToDo {
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

const ThingToDoSchema = SchemaFactory.createForClass(ThingToDo);
//////////

@Schema()
class Restaurant {
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

  @Prop()
  video: string;

  @Prop({ required: true })
  images: string[];

  @Prop({ required: true, type: CoordinatesSchema })
  coordinates: Coordinates;

  @Prop({ required: true })
  isFavourite: boolean;
}

const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
///////

@Schema()
class Hotel {
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

const HotelSchema = SchemaFactory.createForClass(Hotel);
////////

@Schema()
class CraftStore {
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

const CraftStoreSchema = SchemaFactory.createForClass(CraftStore);
////////

@Schema()
export class City1 extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  video: string;

  @Prop({ required: true })
  images: string[];

  @Prop({ required: true, type: CoordinatesSchema })
  coordinates: Coordinates;

  @Prop({ required: true })
  isFavourite: boolean;

  @Prop({ required: true })
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

export const CitySchema = SchemaFactory.createForClass(City1);
