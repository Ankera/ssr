import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

const YAML_CONFIG_FILENAME = 'config.yml';
const filePath = join(__dirname, '../config', YAML_CONFIG_FILENAME);
const envPath = join(__dirname, '../config', `${process.env.NODE_ENV}.yml`);

const commonConfig = yaml.load(readFileSync(filePath, 'utf-8'));
const envCOnfig = yaml.load(readFileSync(envPath, 'utf-8'));

/**
 * config
 */
export default () => {
  return _.merge(commonConfig, envCOnfig);
};
