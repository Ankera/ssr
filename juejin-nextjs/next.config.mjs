import defautNextConfigImage from './next.config/next.config.image.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://blog.csdn.net/zhbzhb324/article/details/134086962
  reactStrictMode: false,
  // output: 'export'
  images: {
    remotePatterns: defautNextConfigImage,
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
