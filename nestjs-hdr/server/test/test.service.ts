import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  public test() {
    return 'this test';
  }
}
