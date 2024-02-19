import { Controller, Get } from '@nestjs/common';
import { TestService } from 'server/test/test.service';

@Controller('hd')
export class HdController {
  constructor(private readonly testServer: TestService) {}

  @Get()
  show() {
    return 'hello hd  ====' + this.testServer.test();
  }
}
