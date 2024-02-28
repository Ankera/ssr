import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import WebpackDevServer from 'webpack-dev-server';

export default async (app: express.Application): Promise<void> => {

  await new Promise((resolve) => {
    app.get('/_react-ssr/index.css', (req, res) => {
      res.send({
        ok: 200,
        message: 'this is success'
      })
    })

    const proxyMiddleware = createProxyMiddleware({
      target: `http://localhost:3002`,
      changeOrigin: true,
      ws: true,
      logLevel: 'error',
    });

    app.use('/*.css', proxyMiddleware);
    app.use('/*.js', proxyMiddleware);

    console.log('=================111r2esolve')
    resolve(null);
  })
  
}