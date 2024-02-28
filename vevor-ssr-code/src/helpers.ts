import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import readdir from 'recursive-readdir';


const cwd: string = process.cwd();

export const existsSync = (f: string): boolean => {
  try {
    fs.accessSync(f, fs.constants.F_OK);
    return true;
  } catch (_) {
    return false;
  }
};

export const isProd = () => {
  let env = process.env.NODE_ENV || 'development';
  if (process.env.REACT_SSR_ENV) {
    env = process.env.REACT_SSR_ENV;
  }
  return env === 'production';
};

export const getEngine = (): 'jsx' | 'tsx' => existsSync(path.join(cwd, 'tsconfig.json')) ? 'tsx' : 'jsx';


export interface Config {
  id: string;
  distDir: string;
  viewsDir: string;
  staticViews: string[];
  webpack?: (defaultConfig: webpack.Configuration, env: 'development' | 'production') => webpack.Configuration;
}


const getSsrConfig = (): Config => {
  const defaultConfig: Config = {
    id: 'default',
    distDir: '.ssr',
    viewsDir: 'views',
    staticViews: [],
  };
  const ssrConfigPath = path.join(cwd, 'ssr.config.ts');
  if (existsSync(ssrConfigPath)) {
    return Object.assign(defaultConfig, require(ssrConfigPath));
  } else {
    return defaultConfig;
  }
};

export const ssrConfig: Config = getSsrConfig();


export const getPageId = (page: string, separator: string = '_'): string => {
  const [, ...rest] = page.replace(path.join(cwd, ssrConfig.viewsDir), '')
                          .replace(path.extname(page), '')
                          .split(path.sep);
  return rest.join(separator);
};