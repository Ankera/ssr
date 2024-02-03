import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class UserService {
  getUsers(): any {
    console.log('Dem11o1', dotenv.config());
    return {
      code: 200,
      data: {
        type: 1,
        name: 'Tom__Tom 1122',
      },
    };
  }

  addUsers(): any {}
}
