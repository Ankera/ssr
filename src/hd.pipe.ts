import {
  ArgumentMetadata,
  // BadRequestException,
  // HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class HdPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // throw new BadRequestException('参数错误');
    // if (metadata.metatype === Number) {
    //   console.log('========1111', value);
    // }
    const object = plainToInstance(metadata.metatype, value);
    const errors: ValidationError[] = await validate(object);
    // if (!value.title) {
    //   throw new BadRequestException('标题不能为空');
    // }

    // console.log('=========', errors[0].constraints);
    if (errors instanceof Array && errors.length) {
      const messages = errors.map((error) => ({
        name: error.property,
        message: Object.values(error.constraints).map((v) => v),
      }));
      // throw new BadRequestException('表单验证错误');
      throw new HttpException(messages, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
