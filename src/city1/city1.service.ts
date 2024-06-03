import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City1 } from 'src/schemas/city1.schema';
import { CreateCityDto } from 'src/city1/dto1/CreateCity1.dto';
import { ThingToDo } from './things_to_do.schema';
import { Restaurant } from './restaurant.schema';
import { Hotel } from './hotel.schema';
import { CraftStore } from './craftstore.schema';
import { UpdateCityDto } from './dto1/UpdateCity1.dto';

@Injectable()
export class CityService {
  constructor(@InjectModel(City1.name) private cityModule1: Model<City1>) {}
 //create city
  async createCity(createCityDto: CreateCityDto): Promise<City1> {
    const newCity = new this.cityModule1(createCityDto);
    return newCity.save();
  }
  //to get city by id . get all the informations 
  async getCityById(cityId: string): Promise<City1> {
    const city = await this.cityModule1.findById(cityId);
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
//////////////////////////
  async updateCityById(cityId: string, updateCityDto: UpdateCityDto): Promise<City1> {
    const existingCity = await this.cityModule1.findByIdAndUpdate(cityId, updateCityDto, {
      new: true,
    });
    if (!existingCity) {
      throw new NotFoundException(`City with ID ${cityId} not found`);
    }
    return existingCity;
  }
   //to get all cities  in each city by id of the city  :
  async getAllCities(): Promise<City1[]> {
    return this.cityModule1.find().exec();
  }
}
