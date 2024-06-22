import { IsNumber, IsString, IsBoolean, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class TranslationsDto {
  @IsString()
  en: string;

  @IsString()
  fr: string;

  @IsString()
  arSA: string;
}

export class CoordinatesDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;
}

export class ThingToDoDto {
  @IsNumber()
  id: number;

  @ValidateNested()
  @Type(() => TranslationsDto)
  title: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  country: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  description: TranslationsDto;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;
}

export class RestaurantDto {
  @IsNumber()
  id: number;

  @ValidateNested()
  @Type(() => TranslationsDto)
  title: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  country: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  description: TranslationsDto;

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

export class HotelDto {
  @IsNumber()
  id: number;

  @ValidateNested()
  @Type(() => TranslationsDto)
  title: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  country: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  description: TranslationsDto;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;
}

export class CraftStoreDto {
  @IsNumber()
  id: number;

  @ValidateNested()
  @Type(() => TranslationsDto)
  title: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  country: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  description: TranslationsDto;

  @IsArray()
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;
}

export class CityDto {
  @IsNumber()
  id: number;

  @ValidateNested()
  @Type(() => TranslationsDto)
  title: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  country: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  description: TranslationsDto;

  @ValidateNested()
  @Type(() => TranslationsDto)
  address: TranslationsDto;

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
  @IsOptional() //////
  @ValidateNested({ each: true })
  @Type(() => ThingToDoDto)
  thingstodo: ThingToDoDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => RestaurantDto)
  restaurants: RestaurantDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => HotelDto)
  hotels: HotelDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CraftStoreDto)
  craftstores: CraftStoreDto[];
}
