import { Controller, Post, Body, Param, Patch, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto} from 'src/country/dto/create-country.dto';
import {  UpdateCountryDto } from 'src/country/dto/update-country.dto';
import { Country} from 'src/schemas/country.schema';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  async create(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countryService.create(createCountryDto);
  }
  @Get()
  async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto): Promise<Country> {
    return this.countryService.update(id, updateCountryDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Country> {
    return this.countryService.findById(id);
  }
}
