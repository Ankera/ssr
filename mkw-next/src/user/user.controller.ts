import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/enum.config';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {
    // private userService: UserService 语法糖
    // this.userService = new UserService();
  }

  @Get()
  getUsers(): any {
    console.log('====env DB======', this.configService.get(ConfigEnum.DB));

    console.log('=======yaml=======', this.configService.get('db'));

    console.log('=======DB_PORT=======', this.configService.get('DB_PORT'));
    return this.userService.getUsers();
  }

  @Post()
  addUsers(): any {
    return this.userService.addUsers();
  }
}
