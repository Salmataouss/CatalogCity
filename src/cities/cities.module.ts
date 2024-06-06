import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City2, CitySchema } from 'src/schemas/cities.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City2.name, schema: CitySchema }]),
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
