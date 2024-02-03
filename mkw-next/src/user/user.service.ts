import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): any {
    return {
      code: 200,
      data: {
        type: 1,
        name: 'Tom__Tom',
      },
    };
  }

  addUsers(): any {}
}
