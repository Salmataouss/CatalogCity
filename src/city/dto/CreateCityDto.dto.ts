// create-city.dto.ts
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

export class CreateCityDto {
  @IsObject()
  name: {
    en: string;
    fr: string;
    arSA: string;
  };

  @IsObject()
  state: {
    en: string;
    fr: string;
    arSA: string;
  };

  @IsObject()
  country: {
    en: string;
    fr: string;
    arSA: string;
  };

  @IsString()
  postalCode: string;

  @IsArray()
  media: MediaDto[];

  @IsObject()
  location: {
    lat: string;
    long: string;
  };

  @IsObject()
  details: DetailsDto;

  @IsArray()
  searchkey: string[];

  @IsOptional()
  @IsEnum(['ACTIVE', 'INACTIVE', 'UNDER_REVIEW', 'DEPRECATED'])
  status?: 'ACTIVE' | 'INACTIVE' | 'UNDER_REVIEW' | 'DEPRECATED';
}
