declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_ROOT: string;

    // 这是click密钥
    CLICK_SECRET_KEY: string;

    /**
     * 这是客户端api请求对URL
     */
    NEXT_PUBLIC_API_URL: string;
  }
}