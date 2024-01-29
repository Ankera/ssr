import React, { useState } from "react";
import logo from '@/assets/11.png'
import './index.css';

export default function() {
  const [num, setNum] = useState(0)

  const addNum = () => {
    setNum(num + 1);
  }

  return (
    <div>
      <div>hello React ssr ----112222</div>
      <div>hello React ssr ----11222</div>
      <div>hello React ssr ----1122</div>
      <h1 onClick={addNum}>{num}</h1>
      <button className="btn">按钮</button>
      <hr />
      <img src={logo} alt="" />
    </div>
  )
}