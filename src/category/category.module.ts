import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/schemas/category.schema';
import { CategoryService } from 'src/category/category.service';
import { CategoryController } from './category.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ConfigModule } from '@nestjs/config';
//import { MongoDBService } from 'src/mongodb/mongodb.service';

@Module({
 
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    ConfigModule,
  ],
  providers: [CategoryService,CloudinaryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
