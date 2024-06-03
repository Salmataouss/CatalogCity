import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { City1, CitySchema } from 'src/schemas/city1.schema';
import { CityController1 } from './city1.controller';
import { CityService } from './city1.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: City1.name, schema: CitySchema }])],
  controllers: [CityController1],
  providers: [CityService],
})
export class CityModule1 {}
