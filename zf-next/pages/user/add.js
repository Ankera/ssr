import React from 'react'
import Link from 'next/link'
import router from 'next/router'
import request from '@/utils/request'
import Layout from './index'

const Add = () => {
  const nameRef = React.useRef();
  const passwordRef = React.useRef();

  const [n, setN] = React.useState(0)

  const handleSumbit = async (event) => {
    event.preventDefault();
    
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const response = await request.post('/api/register', {name, password}).then(a => a.data)
    if(response.success){
      router.push('/user/list')
    }
  }

  return (
    <Layout>
        <p>{n}</p>
        <button onClick={() => {setN(n + 1)}}>+</button>
      <form onSubmit={handleSumbit}>
        <p>用户名 <input type='text' ref={nameRef}></input></p>
        <p>密码 <input type='text' ref={passwordRef}></input></p>
        <button type='sumbit'>注册</button>
      </form>
    </Layout>
  )
}

export default Add;