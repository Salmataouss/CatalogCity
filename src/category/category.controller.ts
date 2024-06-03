import { Controller, Get, Post, Body, Param, HttpException, Query } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import * as mongoose from 'mongoose';
import { Category } from 'src/schemas/category.schema';
import { url } from 'inspector';
import { CreateCategoryDto } from './dto/CreateCategory.dto';

@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }
  @Post("/url")
   testImage(@Body("url") url: string): Promise<any> {
    return this.categoryService.createUrl(url);
  }
    

  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<Category> {
    // Vérifier si l'ID est valide
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Category not found', 404);

    const findCategory = await this.categoryService.getCategoryById(id);
    if (!findCategory) throw new HttpException('Category not found', 404);
    return findCategory;
  }
 
  @Get('name/:lang')
  async getCategoryName(@Param('lang') lang: string): Promise<{name:string;media:string}> {
    return this.categoryService.getCategoryNameByLang( lang || 'en' );
  }
  @Get('name/media/:lang')
  async getCategoryNameMedia(@Param('lang') lang: string): Promise<{name:string;media:string}> {
    return this.categoryService. getCategoryNameMediaByLang( lang || 'en' );
  }



  @Post('updateImage/:id')
  Updateimagecategory(@Body('media') media: string,@Param('id') id: string): Promise<Category> {
    return this.categoryService.Updateimagecategory(media,id);
  }


}


