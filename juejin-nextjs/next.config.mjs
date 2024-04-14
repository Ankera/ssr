import defautNextConfigImage from './next.config/next.config.image.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://blog.csdn.net/zhbzhb324/article/details/134086962
  reactStrictMode: false,
  // output: 'export'
  images: {
    remotePatterns: defautNextConfigImage,
  },
  async webpack(config, { isServer }) {
    const res = await config.entry();
    console.log('======config', res, isServer)
    // if (isServer) {
    //   // 针对服务器端渲染配置
    //   config.entry = './server.js';
    //   config.output.libraryTarget = 'commonjs2'; // 输出为 CommonJS2 格式
    // } else {
    //   // 针对客户端渲染配置
    //   config.entry = './client.js';
    // }
    return config;
  },
  // basePath: '/docs',
  // headers: async () => {
  //   return [
  //     {
  //       source: '/form4',
  //       headers: [
  //         {
  //           key: 'x-custom-header',
  //           value: 'my custom header value',
  //         },
  //         {
  //           key: 'x-another-custom-header',
  //           value: 'my other custom header value',
  //         },
  //       ],
  //     },
  //   ]
  // }
};

export default nextConfig;
