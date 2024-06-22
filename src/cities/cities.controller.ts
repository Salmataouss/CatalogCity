import { Controller, Post, Body,Get, Param ,Put, NotFoundException, Delete} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CityDto } from './dto/createCities.dto';
import { ThingToDo } from './things.schema';
import { Restaurant } from './restaurants.schema';
import { Hotel } from './hotels.schema';
import { CraftStore } from './craftstores.schema';
import { UpdateCityDto } from './dto/updateCities.dto';
import { City2 } from 'src/schemas/cities.schema';

@Controller('cities2')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  async createCity(@Body() cityDto: CityDto) {
    return this.citiesService.createCity(cityDto);
  }
  @Get()
  async getAllCities() {
    return this.citiesService.getAllCities();
  }
  @Get(':id')
  async getCityById(@Param('id') id: string) {
    return this.citiesService.getCityById(id);
  }
  @Get(':cityId/things')
  async getThingsToDoInCity(@Param('cityId') cityId: string): Promise<ThingToDo[]> {
    return this.citiesService.getThingsToDoInCity(cityId);
  }
  @Get(':cityId/restaurants')
  async getRestaurantsInCity(@Param('cityId') cityId: string): Promise<Restaurant[]> {
    return this.citiesService.getRestaurantsInCity(cityId);
  }
  @Get(':cityId/hotels')
  async getHotelsInCity(@Param('cityId') cityId: string): Promise<Hotel[]> {
    return this.citiesService.getHotelsInCity(cityId);
  }
  @Get(':cityId/craftstores')
  async getCraftStoresInCity(@Param('cityId') cityId: string): Promise<CraftStore[]> {
    return this.citiesService.getCraftStoresInCity(cityId);
  }
  ///update
  @Put(':id')
  async updateCityById(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto): Promise<City2> {
    const updatedCity = await this.citiesService.updateCityById(id, updateCityDto);
    if (!updatedCity) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return updatedCity;
  }
  @Delete(':id')
  async deleteCityById(@Param('id') id: string): Promise<void> {
    return this.citiesService.deleteCityById(id);
  }
}
