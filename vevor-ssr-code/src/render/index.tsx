import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getPageId, isProd } from '../helpers';

require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-react-require',
    ['babel-plugin-css-modules-transform', {
      'extensions': [
        '.css',
        '.scss',
      ],
    }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', {
      useBuiltIns: true,
    }],
    '@babel/plugin-transform-react-jsx',
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
      helpers: true,
      regenerator: true,
      useESModules: false,
    }],
    isProd() && [
      'babel-plugin-transform-react-remove-prop-types',
      {
        removeImport: true,
      },
    ],
  ].filter(Boolean),
})


export default async function render(file: string, props: any): Promise<string> {
  const pageId = getPageId(file, '_');
  let Page = require(file);
  Page = Page.default || Page;
  
  console.log('==Page==', Page);
  const str = ReactDOMServer.renderToString(<Page {...props}></Page>)

  console.log('==str==', str);

  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="/_react-ssr/${pageId}.css">
    </head>
    <body>${str}</body>
  </html>
  `
}