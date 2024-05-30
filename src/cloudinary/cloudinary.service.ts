import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: "dvopsdhcs",
      api_key: "484863258236122",
      api_secret: "uYmR-u3HNHzCZLZfY7NFLk4E8cA",
    });
  }

  async uploadImage(imageUrl: string ,  folderName: string): Promise<UploadApiResponse> {
    return cloudinary.uploader.upload(imageUrl, {
        folder: folderName 
      });
  }
}
