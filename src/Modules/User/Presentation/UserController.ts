import { Controller, Post, Req } from '@nestjs/common';
import { UserService } from './UserService';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Req() request: Request) {
    await this.userService.create(request.body.username, request.body.password);
  }

  @Post('/change-username')
  async changeUsername(@Req() request: Request) {
    await this.userService.changeEmail(request.body.username);
  }
}
