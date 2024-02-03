import { Controller, Get, Render } from '@nestjs/common';

@Controller('new')
export class NewController {
  @Get()
  @Render('new') // 使用 index.pug 模板进行渲染
  getIndex() {
    return { name: 'NestJS' }; // 传递给模板的数据
  }
}
