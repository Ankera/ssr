"use client"

import { useEffect, useState } from 'react';
import TestA from '@/app/components/a'

export default function Home() {

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
      <hr />
      <TestA />
    </div>
  )
}
