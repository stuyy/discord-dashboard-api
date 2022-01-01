import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { ROUTES } from '../../utils/constants';
import { AuthUser } from '../../utils/decorators';
import { User } from '../../utils/typeorm/entities/User';
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3000/menu');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@AuthUser() user: User) {
    return user;
  }

  @Post('logout')
  logout() {}
}
