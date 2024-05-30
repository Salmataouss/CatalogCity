import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCityDto } from './dto/CreateCityDto.dto';
import { City } from 'src/schemas/city.schema';
import { UpdateCityDto } from './dto/UpdateCityDto.dto';


@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private cityModel: Model<City>) {}

  // Create a new city document
  async create(createCityDto: CreateCityDto): Promise<City> {
    const createdCity = new this.cityModel(createCityDto);
    return createdCity.save();
  }

  // Retrieve all city documents
  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

   // Retrieve a single city document by ID
   async findOne(id: string): Promise<City> {
    const city = await this.cityModel.findById(id).exec();
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }
  async update(id: string, updateCityDto: UpdateCityDto): Promise<City> {
    const updatedCity = await this.cityModel.findByIdAndUpdate(id, updateCityDto, { new: true }).exec();
    if (!updatedCity) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return updatedCity;
  }
//   async delete(id: string): Promise<void> {
//     const result = await this.cityModel.findByIdAndDelete(id).exec();
//     if (!result) {
//       throw new NotFoundException(`City with ID ${id} not found`);
//     }
// }
}