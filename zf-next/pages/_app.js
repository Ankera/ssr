import App from 'next/app'
import Link from 'next/link'
import '../styles/global.css';
import style from './_app.module.css'

class LayoutApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps }
  }

  render() {
    const { Component: RouteComponent, pageProps } = this.props;

    return (
      <div>
        <style jsx>
        {
          `
            ul {
              display: flex;
            }
            ul li {
              margin-right: 16px;
            }
          `
        }
        </style>
        <header>
          <h1>头部</h1>
          <img className={style.logo} src='/images/11.png' />
          <ul>
            <li><Link href="/">首页</Link></li>
            <li><Link href="/user">用户管理</Link></li>
            <li><Link href="/profile">个人中心</Link></li>
          </ul>
        </header>

        <RouteComponent {...pageProps}/>

        <footer style={{textAlign: 'center'}}>底部---珠峰架构</footer>
      </div>
    )
  }
}

export default LayoutApp;