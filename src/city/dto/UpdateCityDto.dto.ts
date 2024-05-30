
import { IsString, IsArray, IsObject, IsEnum, IsOptional } from 'class-validator';

class MediaDto {
  @IsString()
  id: string;

  @IsString()
  about: string;

  @IsEnum(['IMAGE', 'VIDEO'])
  type: 'IMAGE' | 'VIDEO';

  @IsString()
  url: string;
}

class DetailsDto {
  @IsObject()
  about: {
    en: string;
    fr: string;
    ar: string;
  };
}

export class UpdateCityDto {
  @IsOptional()
  @IsObject()
  name?: {
    en: string;
    fr: string;
    arSA: string;
  };

  @IsOptional()
  @IsObject()
  state?: {
    en: string;
    fr: string;
    arSA: string;
  };

  @IsOptional()
  @IsObject()
  country?: {
    en: string;
    fr: string;
    arSA: string;
  };

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsArray()
  media?: MediaDto[];

  @IsOptional()
  @IsObject()
  location?: {
    lat: string;
    long: string;
  };

  @IsOptional()
  @IsObject()
  details?: DetailsDto;

  @IsOptional()
  @IsArray()
  searchkey?: string[];

  @IsOptional()
  @IsEnum(['ACTIVE', 'INACTIVE', 'UNDER_REVIEW', 'DEPRECATED'])
  status?: 'ACTIVE' | 'INACTIVE' | 'UNDER_REVIEW' | 'DEPRECATED';
}
