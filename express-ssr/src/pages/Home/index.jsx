import React, { useState } from "react";
import styles from './index.css';

console.log('=======client serve33r 222=========', styles)

export default function() {
  const [num, setNum] = useState(0)

  const addNum = () => {
    setNum(num + 1);
  }

  return (
    <div>
      <div>hello React ssr ----112222</div>
      <div>hello React ssr ----1122</div>
      <div>hello React ssr ----1122</div>
      <h1 onClick={addNum}>{num}</h1>
      <button >按钮</button>
    </div>
  )
}