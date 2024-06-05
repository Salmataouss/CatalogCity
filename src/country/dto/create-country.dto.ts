import { IsString, IsBoolean, IsArray, IsOptional, IsNumber, ValidateNested, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

class CoordinatesDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;
}

export class CreateCountryDto {
  @IsString()
  title: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsObject()
  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  @IsBoolean()
  isFavourite: boolean;

  @IsArray()
  @IsString({ each: true })
  searchkey: string[];

  @IsString()
  status: string;
}
