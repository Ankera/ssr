import React from 'react';
import '@/assets/global.css'
import Home from '@/pages/Home'
import New from '@/pages/New'

export default () => {
  return (
    <div className='app_container'>
      <Home />
      <New />
    </div>
  )
}