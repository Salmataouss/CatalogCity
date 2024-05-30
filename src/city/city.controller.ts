import { Controller, Post, Body, Get, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/CreateCityDto.dto';
import { UpdateCityDto } from './dto/UpdateCityDto.dto';
import { City } from 'src/schemas/city.schema';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Body() createCityDto: CreateCityDto): Promise<City> {
    return this.cityService.create(createCityDto);
  }

  @Get()
  async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<City> {
    const city = await this.cityService.findOne(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto): Promise<City> {
    const updatedCity = await this.cityService.update(id, updateCityDto);
    if (!updatedCity) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return updatedCity;
  }

}
