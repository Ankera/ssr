import path from 'path';
import { getEngine, ssrConfig, isProd } from './helpers';
import render from './render/index'


const register = async (nestJSApp: any): Promise<void> => {
  const app = nestJSApp.getHttpAdapter().getInstance();

  const renderFile = async (file: string, options: any, cb: (err: any, html?: any) => void) => {
    // console.log('file', file, options, cb)
    try {
      const { settings, cache, _locals, ...props } = options;

      return cb(undefined, await render(file, props));
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
  
  const engine: 'jsx' | 'tsx' = getEngine();

  console.log('=====2=', process.env.NODE_ENV)
  app.engine(engine, renderFile);
  app.set('views', path.join(process.cwd(), ssrConfig.viewsDir));
  app.set('view engine', engine);

  if (isProd()) {
    await (await import('./optimize/production')).default(app);
  } else {
    await (await import('./optimize/development')).default(app);
  }
};


export default register;