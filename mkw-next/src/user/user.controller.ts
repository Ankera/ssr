import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { User } from './user.entity';
import { Logger } from 'nestjs-pino';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private logger: Logger,
  ) {
    // private userService: UserService 语法糖
    // this.userService = new UserService();
  }

  @Get('/:id')
  getUsers(): any {
    return 'this hello world';
  }

  @Get('allUsers')
  getAllUsers(): any {
    return this.userService.findAll();
  }

  @Post()
  addUser(@Body() dto: any): any {
    console.log('🚀 ~ ====UserController ~ addUser ~ dto:==', dto);
    const user = dto as User;
    return this.userService.create(user);
  }

  // @Post()
  // addUsers(): any {
  //   return this.userService.addUsers();
  // }
}
