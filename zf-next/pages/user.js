import Link from 'next/link'

const User = (props) => {
  return (
    <div>
      <p>User</p>
      <Link href="/user/list">用户列表</Link>

      {props.children}
    </div>
  )
}

export default User;