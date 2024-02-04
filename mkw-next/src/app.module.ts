import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { NewModule } from './new/new.module';
import { SsrModule } from './ssr/ssr.module';
// import configuration from './configuration';
import * as dotenv from 'dotenv';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigEnum } from './enum/enum.config';
import { User } from './user/user.entity';
import { Profile } from './user/profile.enttiy';
import { Roles } from './roles/roles.entity';
import { Logs } from './logs/logs.entity';

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
        // DB_URL: Joi.string().domain(),
        DB_HOST: Joi.string().ip(),
        DB_TYPE: Joi.string().valid('mysql'),
        DB_DATABASE: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_SYNC: Joi.bool().default(false),
      }),
    }),
    UserModule,
    NewModule,
    SsrModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get(ConfigEnum.DB_TYPE),
          host: configService.get(ConfigEnum.DB_HOST),
          port: configService.get(ConfigEnum.DB_PORT),
          username: configService.get(ConfigEnum.DB_USERNAME),
          password: configService.get(ConfigEnum.DB_PASSWORD),
          database: configService.get(ConfigEnum.DB_DATABASE),
          entities: [User, Profile, Roles, Logs],
          synchronize: configService.get(ConfigEnum.DB_SYNC),
          logging: ['error'],
        }) as TypeOrmModuleOptions,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '12345678',
    //   database: 'php_commerce',
    //   entities: [],
    //   synchronize: true,
    // }),
    /**
     * pino 日志
     */
    LoggerModule.forRoot({
      // pinoHttp: {
      //   transport: {
      //     target: 'pino-pretty',
      //     options: {
      //       colorize: true,
      //     },
      //   },
      // },
      pinoHttp: {
        transport: {
          targets: [
            process.env.NODE_ENV == 'development'
              ? {
                  level: 'info',
                  target: 'pino-pretty',
                  options: {
                    colorize: true,
                  },
                }
              : {
                  level: 'info',
                  target: 'pino-roll',
                  options: {
                    file: join('logs', 'log.txt'),
                    frequency: 'daily',
                    size: '10m',
                    mkdir: true,
                  },
                },
          ],
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
