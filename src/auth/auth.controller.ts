import { Controller, Post, Body, Get, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    console.log('Received SignUp request:', signUpDto); 
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    console.log('Received Login request:', loginDto);
    return this.authService.login(loginDto);
  }
  @Post('forgot-password')
  async forgotPassword(@Body('email') email: string): Promise<{ message: string; otp: string }> {
    const otp = await this.authService.forgotPassword(email);
    // Optionally, you can send a success response back to the client
    return {
      message: 'Password reset instructions and OTP have been sent to your email.',
      otp: otp
    };
  }


  @Post('reset-password')
  async resetPassword(@Body('email') email: string, @Body('otp') otp: string, @Body('newPassword') newPassword: string): Promise<void> {
    await this.authService.resetPassword(email, otp, newPassword);
    // Optionally, you can send a success response back to the client
  }

}
