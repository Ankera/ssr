import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HdService } from './hd.service';
import { ConfigService } from './config.service';
import { DevService } from './dev.service';
// import { config } from 'dotenv';
import { DbService } from './db.service';
import { HdModule } from './hd/hd.module';
import { TestModule } from './test/test.module';
// import * as path from 'path';

// config({ path: path.join(__dirname, '../.env') });

console.log('====2========', process.env.NODE_ENV);

const configServer = {
  provide: 'config',
  useValue: {
    name: '后盾人',
    auhtor: 'zimu',
  },
};

const dyService = {
  provide: 'dyService',
  useClass: process.env.NODE_ENV === 'development' ? DevService : AppService,
};

@Module({
  imports: [HdModule, TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    HdService,
    {
      provide: 'appName',
      useValue: '后盾人',
    },
    configServer,
    DevService,
    dyService,
    ConfigService,
    DbService,
  ],
})
export class AppModule {}
