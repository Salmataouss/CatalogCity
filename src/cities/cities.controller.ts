import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { ThingToDo} from 'src/cities/things.schema';
import { Restaurant} from 'src/cities/restaurants.schema';
import { Hotel } from 'src/cities/hotels.schema';
import { CraftStore} from 'src/cities/craftstores.schema';
import { City2 } from 'src/schemas/cities.schema';
import { CityDto } from './dto/createCities.dto';


@Controller('cities2')
export class CitiesController {
  constructor(private readonly cityService: CitiesService) {}

  @Post()
  async createCity(@Body() createCityDto: CityDto): Promise<City2> {
    return this.cityService.createCity(createCityDto);
  }
  @Get(':id')
  async getCityById(@Param('id') id: string): Promise<City2> {
    return this.cityService.getCityById(id);
  }
  @Get(':citiesId/things-to-do')
  async getThingsToDoInCity(@Param('citiesId') cityId: string): Promise<ThingToDo[]> {
    return this.cityService.getThingsToDoInCity(cityId);
  }
  @Get(':citiesId/restaurants')
  async getRestaurantsInCity(@Param('citiesId') cityId: string): Promise<Restaurant[]> {
    return this.cityService.getRestaurantsInCity(cityId);
  }
  @Get(':citiesId/hotels')
  async getHotelsInCity(@Param('citiesId') cityId: string): Promise<Hotel[]> {
    return this.cityService.getHotelsInCity(cityId);
  }
  @Get(':citiesId/craftstores')
  async getCraftStoresInCity(@Param('citiesId') cityId: string): Promise<CraftStore[]> {
    return this.cityService.getCraftStoresInCity(cityId);
  }
  @Get()
  async getAllCities(): Promise<City2[]> {
    return this.cityService.getAllCities();
  }
}
