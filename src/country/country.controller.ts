import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from 'src/schemas/country.schema';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Country> {
    return this.countryService.findOne(id);
  }

  @Post()
  async createCountry(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countryService.create(createCountryDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto): Promise<Country> {
    return this.countryService.update(id, updateCountryDto);
  }


}
