"use client"

import { useEffect, useState } from 'react';

export default function TestA() {

  const [n, setNumber] = useState([1,2,3,4,5])

  useEffect(() => {
    console.log('11111')
  }, [])

  return (
    <div>
      <h1>hello Page</h1>
      {
        n.map(i => {
          return <div key={i}>{i}</div>
        })
      }
      <div>change</div>
    </div>
  )
}
