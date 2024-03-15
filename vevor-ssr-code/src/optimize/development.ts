import fs from 'fs';
import fse from 'fs-extra';
import MemoryFileSystem from 'memory-fs';
import path from 'path';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import webpack from 'webpack';
import { configureWebpack } from './webpack.config';
import { getEntry } from './helpers';
import { ssrConfig, isProd } from '../helpers';

const cwd = process.cwd();

const ufs = require('unionfs').ufs;
const memfs = new MemoryFileSystem();
ufs.use(fs).use(memfs);

export default async (app: express.Application): Promise<void> => {
  fse.removeSync(path.join(cwd, ssrConfig.distDir));

  const [entry, entryPages] = await getEntry(memfs);
  // const webpackConfig: webpack.Configuration = configureWebpack(entry);
  // const compiler: webpack.Compiler = webpack(webpackConfig);
  // compiler.inputFileSystem = ufs;

  await new Promise((resolve) => {
    app.get('/_react-ssr/home.css', (req, res) => {
      res.send(`
      .title {
        color: red;
      }
      .title_home {
        font-size: 100px;
      }
      `)
    })

    const proxyMiddleware = createProxyMiddleware({
      target: `http://localhost:3002`,
      changeOrigin: true,
      ws: true,
      logLevel: 'error',
    });

    app.use('/*.css', proxyMiddleware);
    app.use('/*.js', proxyMiddleware);

    resolve(null);
  })
  
}