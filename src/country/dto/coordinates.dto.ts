import { IsNumber } from 'class-validator';

export class CoordinatesDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;
}
