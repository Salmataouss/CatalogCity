import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load environment variables from .env file
  console.log('DB_URI:', process.env.DB_URI); // Verify DB_URI is loaded correctly
  console.log('JWT_SECRET:', process.env.JWT_SECRET); // Verify JWT_SECRET is loaded correctly
  console.log('JWT_EXPIRES:', process.env.JWT_EXPIRES); // Verify JWT_EXPIRES is loaded correctly

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
