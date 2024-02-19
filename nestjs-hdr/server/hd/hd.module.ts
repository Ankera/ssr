import { Module } from '@nestjs/common';
import { HdService } from './hd.service';
import { HdController } from './hd.controller';
import { TestService } from 'server/test/test.service';

@Module({
  providers: [HdService, TestService],
  controllers: [HdController],
})
export class HdModule {}
