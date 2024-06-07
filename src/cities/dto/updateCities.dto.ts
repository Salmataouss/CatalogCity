import { PartialType } from '@nestjs/mapped-types';
import { CityDto } from './createCities.dto';

export class UpdateCityDto extends PartialType(CityDto) {}
