import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from 'src/schemas/country.schema';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country.name) private readonly countryModel: Model<Country>) {}

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }

  async findOne(id: string): Promise<Country> {
    return this.countryModel.findById(id).exec();
  }

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return createdCountry.save();
  }

  async update(id: string, updateCountryDto: UpdateCountryDto): Promise<Country> {
    return this.countryModel.findByIdAndUpdate(id, updateCountryDto, { new: true }).exec();
  }

 
}
