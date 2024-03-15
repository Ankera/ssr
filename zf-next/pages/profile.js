import router from 'next/router'
// import './common.css';

const Profile = () => {
  return (
    <div className="title">
      <p>Profile</p>
      <button onClick={() => router.back() }>返回</button>
    </div>
  )
}

export default Profile;