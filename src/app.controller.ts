import { Controller, Get, Param, Post, UsePipes, Body } from '@nestjs/common';
import { ConfigService as GFConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { PrismaClient } from '@prisma/client';
import { HdPipe } from './hd.pipe';
import CreateArticleDto from './dto/create.article.dto';

@Controller()
export class AppController {
  private prisma: PrismaClient;
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
    private readonly gfconfig: GFConfigService,
  ) {
    this.prisma = new PrismaClient();
  }

  @Get()
  getHello() {
    return (
      this.appService.getHello() +
      '<br>' +
      this.gfconfig.get('APP_NAME') +
      '<br>' +
      process.env.APP_NAME
    );
  }

  @Get('id/:id')
  @UsePipes(HdPipe)
  async getId(@Param('id') id: number) {
    if (typeof +id === 'number') {
      const result = await this.prisma.article.findUnique({
        where: {
          id: +id,
        },
      });
      // console.log(JSON.stringify(result));
      return {
        idStr: id,
        id: result.id + '',
        title: result.title,
        content: result.content,
      };
      // return result.title + result.id + result.content;
    }
  }

  @Post('store')
  @UsePipes(HdPipe)
  async add(@Body() dto: CreateArticleDto) {
    return dto;
  }
}
