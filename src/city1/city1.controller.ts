import { Controller, Post, Body, Param, Get, Put } from '@nestjs/common';
import { CityService } from './city1.service';
import { City1 } from 'src/schemas/city1.schema';
import { CreateCityDto } from 'src/city1/dto1/CreateCity1.dto';
import { ThingToDo } from './things_to_do.schema';
import { Restaurant } from './restaurant.schema';
import { Hotel } from './hotel.schema';
import { CraftStore } from './craftstore.schema';
import { UpdateCityDto } from './dto1/UpdateCity1.dto';

@Controller('cities1')
export class CityController1 {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async createCity(@Body() createCityDto: CreateCityDto): Promise<City1> {
    return this.cityService.createCity(createCityDto);
  }
  @Get(':id')
  async getCityById(@Param('id') id: string): Promise<City1> {
    return this.cityService.getCityById(id);
  }
  @Get(':cityId/things-to-do')
  async getThingsToDoInCity(@Param('cityId') cityId: string): Promise<ThingToDo[]> {
    return this.cityService.getThingsToDoInCity(cityId);
  }
  @Get(':cityId/restaurants')
  async getRestaurantsInCity(@Param('cityId') cityId: string): Promise<Restaurant[]> {
    return this.cityService.getRestaurantsInCity(cityId);
  }
  @Get(':cityId/hotels')
  async getHotelsInCity(@Param('cityId') cityId: string): Promise<Hotel[]> {
    return this.cityService.getHotelsInCity(cityId);
  }
  @Get(':cityId/craftstores')
  async getCraftStoresInCity(@Param('cityId') cityId: string): Promise<CraftStore[]> {
    return this.cityService.getCraftStoresInCity(cityId);
  }
  //update 
  @Put(':id')
  async updateCityById(
    @Param('id') cityId: string,
    @Body() updateCityDto: UpdateCityDto
  ) {
    return this.cityService.updateCityById(cityId, updateCityDto);
  }
  @Get()
  async getAllCities(): Promise<City1[]> {
    return this.cityService.getAllCities();
  }
}
