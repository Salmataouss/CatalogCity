import { IsNotEmpty, IsString, IsArray, ValidateNested, IsBoolean, IsNumber,IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Coordinates } from '../coordinates.schema';
import { CoordinatesDto } from './coordinates.dto';

export class CreateCountryDto {
  @IsNotEmpty()
  @IsObject()
  title: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  country: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  address: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  description: Record<string, string>;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ValidateNested()
  @Type(() => CoordinatesDto)
  @IsNotEmpty()
  coordinates: CoordinatesDto;

  @IsNotEmpty()
  @IsBoolean()
  isFavourite: boolean;
}


