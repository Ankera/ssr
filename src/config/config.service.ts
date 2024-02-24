import { Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs';

@Injectable()
export class ConfigService {
  config = {};

  constructor() {
    const config = { path: path.resolve(__dirname, '../configure') };
    console.log('===========', config);
    fs.readdirSync(config.path).forEach(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(config.path, file));
        this.config = {
          ...this.config,
          ...module.default(),
        };
      }
    });
  }

  public get(p: string) {
    console.log(this.config, p);
    return p.split('.').reduce((config, name) => {
      return config[name];
    }, this.config);
    // return this.config;
  }
}
