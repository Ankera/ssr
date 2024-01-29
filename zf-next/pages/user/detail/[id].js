import Layout from '../index'

const UserDetails = (props) => {
  return (
    <Layout>
      <p>用户详情{props.user.id}</p>
    </Layout>
  )
}

UserDetails.getInitialProps = async (ctx) => {
  return {
    user: {
      id: ctx.query.id
    }
  }
}

export default UserDetails;