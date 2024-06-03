// src/category/category.service.ts

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from '../schemas/category.schema';
import { CreateCategoryDto } from './dto/CreateCategory.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) 
    private readonly categoryModel: Model<CategoryDocument>,
    private readonly cloudinaryService: CloudinaryService )
  
     {}
     
    
      
   // Method to get category names  by language
  async getCategoryNameByLang( lang: string): Promise<any> {
    const category = await this.categoryModel.find().exec();
    const categorys = category.map((cat) => {
      return {
        name : cat.name[lang],
      }
    })
    return categorys;
  }
   // Method to get category names  and media by language
  async getCategoryNameMediaByLang( lang: string): Promise<any> {
    const category = await this.categoryModel.find().exec();
    const categorys = category.map((cat) => {
      return {
        name : cat.name[lang],
        media: cat.media
      }
    })
    return categorys;
  }

  // Method to update the image of a category
  async Updateimagecategory(url:string,id:string): Promise<any> {
    const categoryimage= await this.categoryModel.findById(id);
    if (!categoryimage){
     return null;
    }
     const cloudinary=await this.cloudinaryService.uploadImage(url,"Categories");
     await this.categoryModel.findByIdAndUpdate(
       {
         _id:categoryimage._id
       },
       {
        media:cloudinary.secure_url 
       }
     )
     
     
     return cloudinary ;
    }

// Method to get a category by its ID
  async getCategoryById(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

 // Method to create a new category
 
 async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
  const newCategory = new this.categoryModel(createCategoryDto);
  return newCategory.save();
}
//   async UpdateImagecategory(url:string,id:string): Promise<any> {
//     const categoryimage= await this.categoryModel.findById(id);
//     if (!categoryimage){
//      return null;
//     }
// }


  // Method to get all categories
  async getCategories(): Promise<Category[]> {
    try {
      console.log('Fetching all categories from database');
      const categories = await this.categoryModel.find().exec();
      console.log('Found categories:', categories);
      return categories;
    } catch (error) {
      console.error('Error fetching all categories:', error.message);
      throw new HttpException('Failed to fetch categories', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async createUrl(url: string): Promise<any> {
    try {
      console.log('Creating URL:', url);
      // Perform the actual URL creation logic here
      return { success: true, url };
    } catch (error) {
      console.error('Error creating URL:', error.message);
      throw new HttpException('Failed to create URL', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  
}
