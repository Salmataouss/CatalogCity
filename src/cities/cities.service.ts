import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ThingToDo } from 'src/cities/things.schema';
import { Restaurant} from 'src/cities/restaurants.schema';
import { Hotel} from 'src/cities/hotels.schema';
import { CraftStore } from 'src/cities/craftstores.schema';
import { City2 } from 'src/schemas/cities.schema';
import { CityDto } from './dto/createCities.dto';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City2.name) private cityModule: Model<City2>) {}
 //create city
  async createCity(createCityDto: CityDto): Promise<City2> {
    const newCity = new this.cityModule(CityDto);
    return newCity.save();
  }
  //to get city by id . get all the informations 
  async getCityById(cityId: string): Promise<City2> {
    const city = await this.cityModule.findById(cityId);
    if (!city) {
      throw new NotFoundException(`City with id ${cityId} not found`);
    }
    return city;
  }
 //to get things to do in each city by id of the city  :
  async getThingsToDoInCity(cityId: string): Promise<ThingToDo[]> {
    const city = await this.getCityById(cityId);
    return city.thingstodo as ThingToDo[];
  }
   //to get restaurants in each city by id of the city  :
  async getRestaurantsInCity(cityId: string): Promise<Restaurant[]> {
    const city = await this.getCityById(cityId);
    return city.restaurants as Restaurant[];
  }
   //to get hotels in each city by id of the city  :
  async getHotelsInCity(cityId: string): Promise<Hotel[]> {
    const city = await this.getCityById(cityId);
    return city.hotels as Hotel[];
  }
  //to get craftstores in each city by id of the city  :
  async getCraftStoresInCity(cityId: string): Promise<CraftStore[]> {
    const city = await this.getCityById(cityId);
    return city.craftstores as CraftStore[];
  }
////////////////////////
   //to get all cities  in each city by id of the city  :
  async getAllCities(): Promise<City2[]> {
    return this.cityModule.find().exec();
  }
}
