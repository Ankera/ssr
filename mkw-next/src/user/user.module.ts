import { Module } from '@nestjs/common';
import { join } from 'path';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Logs } from 'src/logs/logs.entity';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Logs]),
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
            {
              level: 'info',
              target: 'pino-pretty',
              options: {
                colorize: true,
              },
            },
            {
              level: 'info',
              target: 'pino-roll',
              options: {
                file: join('logs', 'log.txt'),
                frequency: 'daily',
                mkdir: true,
              },
            },
          ],
        },
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
