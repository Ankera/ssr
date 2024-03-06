import external from 'rollup-plugin-auto-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

const isProd = process.env.NODE_ENV === 'production';
const distDir = isProd ? 'dist/production' : 'dist/development';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const coreConfig = {
  context: 'node',
  plugins: [
    external(),
    resolve({
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      plugins: ['@babel/plugin-transform-runtime'] 
    }),
    typescript(),
    commonjs(),
    (isProd && terser()),
    json(),
  ],
};

const dirConfig = (src) => ({
  input: src,
  output: {
    dir: distDir,
    format: 'cjs',
  },
  ...coreConfig,
});

const fileConfig = (src, dist) => ({
  input: src,
  output: {
    file: dist,
    format: 'cjs',
  },
  ...coreConfig,
});

export default [
  dirConfig('src/register.ts'),
  fileConfig('src/components/Document/index.tsx', `${distDir}/document.js`),
  fileConfig('src/components/Document/context.ts', `${distDir}/document-context.js`),
  fileConfig('src/components/Head/index.tsx', `${distDir}/head.js`),
  fileConfig('src/components/Main.tsx', `${distDir}/main.js`),
  fileConfig('src/components/App.tsx', `${distDir}/app.js`),
];
