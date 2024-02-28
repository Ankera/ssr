import React, { useState } from 'react'

const Counter = (props) => {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <p>{number}-{number}</p>
      <p>{number}-{number}</p>
      <p>{number}-{number}</p>
      <p>{number}-{number}</p>
      <p>{number}-{number}</p>
      <p>{number}-{number}</p>
      <p>{number}-{number}</p>
      <p>{number}-{number}</p>
      <p>{props.message || '-'}</p>
      <button onClick={() => setNumber(number + 1)}>加法</button>
    </div>
  )
}

export default Counter;