import { Injectable } from '@nestjs/common';

import { HdService } from './hd.service';

@Injectable()
export class AppService {
  constructor(private readonly hd: HdService) {
    // this.hd = new HdService();
  }

  getHello(): string {
    return 'Hello World!';
  }

  getHd() {
    return this.hd.hd();
  }
}
