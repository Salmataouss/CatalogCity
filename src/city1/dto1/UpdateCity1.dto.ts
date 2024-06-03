// src/city1/dto/update-city.dto.ts

import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

class CoordinatesDto {
  @IsOptional() lat?: number;
  @IsOptional() lon?: number;
}

class ThingToDoDto {
  @IsOptional() id?: number;
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() address?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsArray() images?: string[];
  @IsOptional() coordinates?: CoordinatesDto;
  @IsOptional() @IsBoolean() isFavourite?: boolean;
}

class RestaurantDto {
  @IsOptional() id?: number;
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() address?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() video?: string;
  @IsOptional() @IsArray() images?: string[];
  @IsOptional() coordinates?: CoordinatesDto;
  @IsOptional() @IsBoolean() isFavourite?: boolean;
}

class HotelDto {
  @IsOptional() id?: number;
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() address?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsArray() images?: string[];
  @IsOptional() coordinates?: CoordinatesDto;
  @IsOptional() @IsBoolean() isFavourite?: boolean;
}

class CraftStoreDto {
  @IsOptional() id?: number;
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() address?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsArray() images?: string[];
  @IsOptional() coordinates?: CoordinatesDto;
  @IsOptional() @IsBoolean() isFavourite?: boolean;
}

export class UpdateCityDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() address?: string;
  @IsOptional() @IsArray() images?: string[];
  @IsOptional() @IsString() video?: string;
  @IsOptional() coordinates?: CoordinatesDto;
  @IsOptional() @IsBoolean() isFavourite?: boolean;
  @IsOptional() @IsArray() searchkey?: string[];
  @IsOptional() @IsString() status?: string;
  @IsOptional() @IsArray() thingstodo?: ThingToDoDto[];
  @IsOptional() @IsArray() restaurants?: RestaurantDto[];
  @IsOptional() @IsArray() hotels?: HotelDto[];
  @IsOptional() @IsArray() craftstores?: CraftStoreDto[];
}
