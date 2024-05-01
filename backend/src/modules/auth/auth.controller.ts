import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  @Post('register')
  async register(
    @Body()
    body: {
      email: string;
      password: string;
      name: string;
      login: string;
    }
  ) {
    const isUserExist = await this.userService.findByLogin(
      body.login.toLowerCase()
    );
    if (isUserExist) {
      throw new UnauthorizedException('This login is already taken');
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await this.userService.createUser(
      body.email,
      hashedPassword,
      body.name,
      body.login.toLowerCase()
    );
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      login: user.login,
    };
  }

  @Post('login')
  async login(@Body() body: { login: string; password: string }) {
    const user = await this.userService.findByLogin(
      body.login.toLocaleLowerCase()
    );
    if (!user) {
      throw new UnauthorizedException('Invalid login');
    }

    const passwordMatch = await bcrypt.compare(body.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { login: user.login, sub: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
