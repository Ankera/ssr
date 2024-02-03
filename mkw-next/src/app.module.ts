import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { NewModule } from './new/new.module';
// import configuration from './configuration';
import * as dotenv from 'dotenv';

const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;

@Module({
  // 全局环境变量
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      // load: [configuration],
      load: [() => dotenv.config({ path: '.env' })],

      // 校验env规则
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'prodction')
          .default('prodction'),
        // DB_PORT: Joi.number().default(3306),
        DB_PORT: Joi.number().valid(3306, 3307),
        DB_URL: Joi.string().domain(),
        DB_HOST: Joi.string().ip(),
      }),
    }),
    UserModule,
    NewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
