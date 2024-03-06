import React from 'react';
import path from 'path';
import cheerio from 'cheerio';
import LZString from 'lz-string';
import URLSafeBase64 from 'urlsafe-base64';
import ReactDOMServer from 'react-dom/server';
import { getPageId, isProd, getEngine, ssrConfig, existsSync } from '../helpers';

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

const compressProps = (props: any) => {
  const packed = JSON.stringify(props);
  const compressed = Buffer.from(LZString.compressToUint8Array(packed));
  return URLSafeBase64.encode(compressed);
}

const getRenderToStringMethod = async () => { 
  const method = (await import('./stringify/default')).default;
  return method;
}

const cwd = process.cwd();
const ext = `.${getEngine()}`;

const userDocumentPath = path.join(cwd, ssrConfig.viewsDir, `_document${ext}`);
let DocumentComponent: any;
if (existsSync(userDocumentPath)) {
  const UserDocument = require(userDocumentPath);
  DocumentComponent = UserDocument.default || UserDocument;
}

export default async function render(file: string, props: any): Promise<string> {
  const pageId = getPageId(file, '_');
  let Page = require(file);
  Page = Page.default || Page;
  
  
  const str = ReactDOMServer.renderToString(<DocumentComponent><Page {...props} /></DocumentComponent>)

  const $ = cheerio.load(str, { decodeEntities: false });

  $('script#react_ssr_data').html(`window.REACT_SSR_DATA=${JSON.stringify(props)}`);
  // console.log('==str=2=', str);

  // const html = (await getRenderToStringMethod())(
  //   <DocumentComponent><React.Fragment><Page {...props} /></React.Fragment></DocumentComponent>,
  //   pageId,
  //   compressProps(props),
  // );
  // return `
  // <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Document</title>
  //     <link rel="stylesheet" href="/_react-ssr/${pageId}.css">
  //   </head>
  //   <body><div id="root">${str}</div></body>
  //   <script src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js"></script>
  //   <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js"></script>
  //   <script src="http://localhost:3002/index.js"></script>
  // </html>
  // `
  // return `${str}<script>window.REACT_SSR_DATA=${props}</script>`;
  return $.html();
}