import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from 'src/schemas/country.schema';
import { CreateCountryDto} from 'src/country/dto/create-country.dto';
import {  UpdateCountryDto } from 'src/country/dto/update-country.dto';
import { Category } from 'src/schemas/category.schema';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<CountryDocument>,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return createdCountry.save();
  }
  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }

  async update(id: string, updateCountryDto: UpdateCountryDto): Promise<Country> {
    const existingCountry = await this.countryModel.findByIdAndUpdate(id, updateCountryDto, { new: true });
    if (!existingCountry) {
      throw new NotFoundException(`Country with id ${id} not found`);
    }
    return existingCountry;
  }

  async findById(id: string): Promise<Country> {
    const country = await this.countryModel.findById(id);
    if (!country) {
      throw new NotFoundException(`Country with id ${id} not found`);
    }
    return country;
  }
}
