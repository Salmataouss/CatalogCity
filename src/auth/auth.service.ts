import { Injectable, UnauthorizedException, InternalServerErrorException, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { v4 as uuidv4 } from 'uuid';
import { KeycloakService } from 'src/keycloak/keycloack.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'; 
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private keycloakService: KeycloakService,
    private cloudinaryService: CloudinaryService, 
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;
    console.log(name)
    console.log(email)
    console.log(password)
    try {
      const code = uuidv4();
      console.log("le code est:" ,code)
      const token = await this.keycloakService.registerAndGetToken({ username: name, email, password, code });

      let imageUrl = 'https://res.cloudinary.com/dvopsdhcs/image/upload/v1718207121/Categories/woman_ebigj2.png';
      // if (image) {
      //   const cloudinaryResult = await this.cloudinaryService.uploadImage(image, 'Snaati');
      //   imageUrl = cloudinaryResult.secure_url;
      // }
      

      const user = await this.userModel.create({
        name,
        code,
        image: imageUrl, 
      });

      const jwtToken = this.jwtService.sign({ id: user._id });

      return { token: jwtToken };
    } catch (error) {
      console.log(error),
      this.logger.error('Error during signup:', JSON.stringify(error, null, 2));
      throw new InternalServerErrorException('Signup failed');
    }
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;

    try {
      const keycloakResponse = await this.keycloakService.login(email, password);
      const jwt = jwtDecode(keycloakResponse.access_token);
      console.log("Decoded JWT:", jwt);
      const code = jwt["code"];
      console.log("le code est:" ,code)
      const user = await this.findUserByCode(code);
      return { user, ...keycloakResponse };
    } catch (error) {
      this.logger.error('Error during login:', error);
      throw new UnauthorizedException('La connexion a échoué. Veuillez réessayer.');
    }
  }

  async findUserByCode(code: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ code }).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Failed to find user by code');
    }
  }
}

  // async login(loginDto: LoginDto): Promise<any> {
  //   const { email, password } = loginDto;

  //   try {
  //     const keycloakResponse = await this.keycloakService.login(email, password);
  //     const jwt = jwtDecode(keycloakResponse.access_token);
  //     const code = jwt["code"];
  //     /////////
  //     console.log('le code est :', code);
  //     /////////
  //     const user = await this.findUserByCode(code);
  //     return { user, ...keycloakResponse };
  //   } catch (error) {
  //     console.log(error),
  //     this.logger.error('Error during login:', error);
  //     throw new UnauthorizedException('la connexion a  echouee, veuillez reessayer');
  //   }
  // }

  // async findUserByCode(code: string): Promise<User> {
  //   try {
  //     const user = await this.userModel.findOne({ code }).exec();
  //     if (!user) {
  //       throw new NotFoundException('User not found');
  //     }
  //     return user;
  //   } catch (error) {
  //     throw new InternalServerErrorException('Failed to find user by code');
  //   }
  // }

