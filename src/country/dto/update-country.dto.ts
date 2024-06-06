import { IsOptional, IsString, IsArray, ValidateNested, IsBoolean ,IsNumber, IsNotEmpty} from 'class-validator';
import { Type } from 'class-transformer';
import { Coordinates } from '../coordinates.schema';

export class UpdateCountryDto {
  @IsOptional()
  @IsString()
  title?: Record<string, string>;

  @IsOptional()
  @IsString()
  country?: Record<string, string>;

  @IsOptional()
  @IsString()
  address?: Record<string, string>;

  @IsOptional()
  @IsString()
  description?: Record<string, string>;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsNotEmpty()
  @Type(() => Coordinates) // Use the Coordinates schema
  coordinates: Coordinates;

  @IsOptional()
  @IsBoolean()
  isFavourite?: boolean;
}


