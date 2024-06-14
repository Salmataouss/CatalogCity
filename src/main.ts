import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenv.config();
  console.log('DB_URI:', process.env.DB_URI); 
  console.log('JWT_SECRET:', process.env.JWT_SECRET); 
  console.log('JWT_EXPIRES:', process.env.JWT_EXPIRES);
  console.log(`KEYCLOAK_BASE_URL: ${process.env.KEYCLOAK_BASE_URL}`);
  console.log(`KEYCLOAK_REALM: ${process.env.KEYCLOAK_REALM}`);
  console.log(`KEYCLOAK_CLIENT_ID: ${process.env.KEYCLOAK_CLIENT_ID}`); 
  console.log(`KEYCLOAK_CLIENT_SECRET: ${process.env.KEYCLOAK_CLIENT_SECRET}`);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  app.enableCors();
}

bootstrap();
