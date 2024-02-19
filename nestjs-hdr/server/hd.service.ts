import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HdService {
  constructor(@Inject('appName') private appName: string) {}
  hd() {
    return 'hello hd' + this.appName;
  }
}
