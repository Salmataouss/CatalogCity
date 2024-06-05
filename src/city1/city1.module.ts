import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { city1, CitySchema } from 'src/schemas/city1.schema';
import { CityController1 } from './city1.controller';
import { CityService } from './city1.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: city1.name, schema: CitySchema }])],
  controllers: [CityController1],
  providers: [CityService],
})
export class CityModule1 {}
