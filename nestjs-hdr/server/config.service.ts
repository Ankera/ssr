import { developmentConfig } from './config/development.config';
import { prodctionConfig } from './config/production.config';
import { config } from 'dotenv';
import * as path from 'path';

config({ path: path.join(__dirname, '../.env') });

export const ConfigService = {
  provide: 'ConfigService',
  useValue:
    process.env.NODE_ENV === 'development'
      ? developmentConfig
      : prodctionConfig,
};
