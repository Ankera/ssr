import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('appName') private appName: string,
    @Inject('dyService') private dyService,
    @Inject('ConfigService') private ConfigService: { url: string },
    private readonly dbService: DbService,
  ) {}

  @Get()
  getHello(): string {
    return (
      this.appService.getHd() +
      ' ' +
      this.appName +
      '<br/>' +
      this.dyService.getDev() +
      '' +
      '<br>' +
      this.ConfigService.url +
      '<br>' +
      this.dbService.connect()
    );
  }
}
