import Link from 'next/link'
import request from '@/utils/request'
import Layout from './index'

const UserList = (props) => {
  // console.log('=======', props)
  return (
    <Layout>
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
  const response = await request.get('/api/users')
  return {
    list: response.data.data
  }
}

export default UserList;