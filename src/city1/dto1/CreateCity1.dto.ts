import { IsString, IsNumber, IsBoolean, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class CoordinatesDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;
}

class ThingToDoDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;
}

class RestaurantDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  video?: string;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;
}

class HotelDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;
}

class CraftStoreDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;
}

export class CreateCityDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  country: string;

  @IsString()
  description: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  video?: string;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;

  @IsArray()
  searchkey: string[];

  @IsString()
  status: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ThingToDoDto)
  thingstodo: ThingToDoDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RestaurantDto)
  restaurants: RestaurantDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HotelDto)
  hotels: HotelDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CraftStoreDto)
  craftstores: CraftStoreDto[];
}
