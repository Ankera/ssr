import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import * as dotenv from 'dotenv';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.userRepository.find();
    // console.log('===users=2==', users);
    return users;
  }

  find(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  async create(user: User) {
    const userImp = await this.userRepository.create(user);
    return this.userRepository.save(userImp);
  }

  async update(id: number, user: Partial<User>) {
    return this.userRepository.update(id, user);
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }

  getUsers(): any {
    // console.log('Dem11o1', dotenv.config());
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
