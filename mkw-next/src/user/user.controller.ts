import { Controller, Get, Post } from '@nestjs/common';
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

  @Get()
  getUsers(): any {
    console.log('=======yaml=======', this.configService.get('db'));

    console.log('=======DB_PORT=======', this.configService.get('DB_PORT'));
    return this.userService.getUsers();
  }

  @Get('allUsers')
  getAllUsers(): any {
    return this.userService.findAll();
  }

  @Post()
  addUser() {
    const user = { username: 'Tom', password: '123456' } as User;
    return this.userService.create(user);
  }

  @Post()
  addUsers(): any {
    return this.userService.addUsers();
  }
}
