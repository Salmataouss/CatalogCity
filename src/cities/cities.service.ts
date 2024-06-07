import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City2 } from 'src/schemas/cities.schema';
import { CityDto } from './dto/createCities.dto';
import { plainToClass, classToPlain } from 'class-transformer';
import { ThingToDo } from './things.schema';
import { Restaurant } from './restaurants.schema';
import { Hotel } from './hotels.schema';
import { CraftStore } from './craftstores.schema';
import { UpdateCityDto } from './dto/updateCities.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City2.name) private cityModel: Model<City2>) {}

  async createCity(cityDto: CityDto): Promise<City2> {
    // Convert the DTO instance to a plain JavaScript object
    const cityObject = classToPlain(cityDto);
    const createdCity = new this.cityModel(cityObject);
    return createdCity.save();
  }

  async getAllCities(): Promise<City2[]> {
    return this.cityModel.find().exec();
  }
 
  async getCityById(id: string): Promise<City2> {
    const city = await this.cityModel.findById(id).exec();
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }
   //to get things to do in each city by id of the city  :
   async getThingsToDoInCity(cityId: string): Promise<ThingToDo[]> {
    const city = await this.getCityById(cityId);
    return city.thingstodo as ThingToDo[];
  }
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
    async updateCityById(cityId: string, updateCityDto: UpdateCityDto): Promise<City2 | null> {
      return this.cityModel.findByIdAndUpdate(cityId, updateCityDto, { new: true }).exec();
    }

  // Other service methods...
}
