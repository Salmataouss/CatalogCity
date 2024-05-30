import { IsNotEmpty, IsOptional, IsString, IsObject } from 'class-validator';

export class CreateCategoryDto {
  
  name: Record<string, string>;

  @IsString()
  @IsOptional()
  media?: string;

  @IsString()
  @IsOptional()
  code_lang: string;

  @IsString()
  @IsOptional()
  added_at?: Date;
}
