import Link from 'next/link'
import Layout from './index'

const UserList = (props) => {
  // console.log('=======', props)
  return (
    <Layout>
      用户列表List
      <ul>
        {
          (props.list || []).map((user) => (
            <li key={user.id}><Link href={`/user/detail/${user.id}`}>{user.name}</Link></li>
          ))
        }
      </ul>
    </Layout>
  )
}

UserList.getInitialProps = async () => {
  return {
    list: [
      {
        id: '1',
        name: 'Tom'
      },
      {
        id: '2',
        name: 'Tom'
      }
    ]
  }
}

export default UserList;