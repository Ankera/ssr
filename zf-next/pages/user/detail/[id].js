import React from 'react'
import Layout from '../index'
import request from '@/utils/request'
// import UserInfo from '@/components/UserInfo'
import dynamic from 'next/dynamic'

const DynamicUserInfo = dynamic(() => import('@/components/UserInfo'))
const UserDetails = (props) => {
  const [show, setShow] = React.useState(false)

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <Layout>
      <div>
        {/* <div>用户名称: {props.user.name}</div> */}
        <div>用户ID: {props.user.id}</div>

        <button onClick={handleShow}>显示/隐藏</button>

        {
          show && props.user && <DynamicUserInfo user={props.user} />
        }
      </div>
    </Layout>
  )
}

UserDetails.getInitialProps = async (ctx) => {
  const response = await request.get(`/api/users/${ctx.query.id}`)
  return {
    user: response.data.data
  }
}

export default UserDetails;