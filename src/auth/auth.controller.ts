import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
//import { AuthGuard } from 'nest-keycloak-connect';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // @Get()
  // @UseGuards(AuthGuard)
  // getProtectedResource() {
  //   return { message: 'This is a protected resource' };
  // }

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
}
