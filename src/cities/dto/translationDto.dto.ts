import { IsString } from 'class-validator';

export class TranslationsDto {
  @IsString()
  en: string;

  @IsString()
  fr: string;

  @IsString()
  arSA: string;
}
