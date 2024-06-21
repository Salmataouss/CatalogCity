import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City2 } from 'src/schemas/cities.schema';
import { Country } from 'src/schemas/country.schema';

@Injectable()
export class SearchService {
    constructor(
        @InjectModel(City2.name) private cityModel: Model<City2>,
        @InjectModel(Country.name) private countryModel: Model<Country>,
    ) {}

    async searchCities(keyword: string): Promise<{ cities: City2[] }> {
        const cities = await this.cityModel.find({
            $or: [
                { 'title.en': { $regex: keyword, $options: 'i' } },
                { 'title.fr': { $regex: keyword, $options: 'i' } },
                { 'title.arSA': { $regex: keyword, $options: 'i' } },
            ],
        }).exec();
        
        return { cities };
    }

    async searchCountries(keyword: string): Promise<{ countries: Country[] }> {
        const countries = await this.countryModel.find({
            $or: [
                { 'title.en': { $regex: keyword, $options: 'i' } },
                { 'title.fr': { $regex: keyword, $options: 'i' } },
                { 'title.arSA': { $regex: keyword, $options: 'i' } },
            ],
        }).exec();
        
        return { countries };
    }

    async search(keyword: string): Promise<{ cities?: City2[], countries?: Country[], message?: string }> {
        const citiesResult = await this.searchCities(keyword);
        const countriesResult = await this.searchCountries(keyword);

        if (citiesResult.cities.length === 0 && countriesResult.countries.length === 0) {
            return { message: `We couldn't find any cities or countries matching "${keyword}". Try searching for another location or discover top travel destinations.` };
        }

        return { cities: citiesResult.cities, countries: countriesResult.countries };
    }
}
