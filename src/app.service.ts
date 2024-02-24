import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  getHello() {
    // return 'Hello World!';
    return this.config.get('app.name');
  }
}
