import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import{CategoryModule} from 'src/category/category.module';
import { CityModule } from 'src/city/city.module'; 
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CityModule1 } from './city1/city1.module';
import { CountryModule } from './country/country.module';
import { CitiesModule } from './cities/cities.module';
//import { KeycloakConfigModule } from './auth/keycloak.module';



@Module({

    imports: [
      MongooseModule.forRoot('mongodb+srv://salmataoussi808:salma1234567@cluster0.yvacjf9.mongodb.net/catalogCity1?retryWrites=true&w=majority&appName=Cluster0'),
      CategoryModule,
      CityModule,
      AuthModule,
      CityModule1,
      CountryModule,
      CitiesModule,
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
      //KeycloakConfigModule, 
   

  ],
  providers: [],
  controllers:[],

  
})
export class AppModule {}
