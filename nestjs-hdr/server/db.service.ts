import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  public connect(): string {
    return '链接数据库';
  }
}
