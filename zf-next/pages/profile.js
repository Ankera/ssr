import router from 'next/router'

const Profile = () => {
  return (
    <div>
      <p>Profile</p>
      <button onClick={() => router.back() }>返回</button>
    </div>
  )
}

export default Profile;