import React from 'react'

const UserInfo = (props) => {
  const [createdAt, setCreatedAt] = React.useState(props.user.createdAt)

  const changeTime = async () => {
    const moment = await import('moment')
    setCreatedAt(moment.default(createdAt).fromNow())
  }

  return (
    <div>
      <p>{props.user.name}</p>
      <p>createdAt: {createdAt}</p>
      <button onClick={changeTime}>切换时间</button>
    </div>
  )
}

export default UserInfo;