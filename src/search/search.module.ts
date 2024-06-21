import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from 'src/schemas/country.schema';
import { City2, CitySchema} from 'src/schemas/cities.schema';
import { SearchService } from './search.service';
import {SearchController } from './search.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Country.name, schema: CountrySchema },
            { name: City2.name, schema:  CitySchema},
        ]),
    ],
    providers: [SearchService],
    controllers: [SearchController],
})
export class LocationModule {}
