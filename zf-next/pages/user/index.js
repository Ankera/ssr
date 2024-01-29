import Link from 'next/link'

function Layout(props) {
  return (
    <div>
      <ul>
        <li><Link href="/user/list">用户列表11</Link></li>
        <li><Link href="/user/add">新增用户22</Link></li>
      </ul>

      {props.children}
    </div>
  )
}

export default Layout;