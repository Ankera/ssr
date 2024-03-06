import React, { useState, useEffect } from 'react'

const Counter = (props) => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('==========', number)
  }, [number]);
  return (
    <div>
      <p>{number}</p>
      <p>{props.message || '-'}</p>
      <button onClick={() => setNumber(number + 1)}>加法11</button>
    </div>
  )
}

export default Counter;