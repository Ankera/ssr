import React, { useState } from "react";

export default function() {
  const [num, setNum] = useState(0)

  const addNum = () => {
    setNum(num + 1);
  }

  return (
    <div>
      <div>hello React ssr ----1122</div>
      <div>hello React ssr ----1122</div>
      <div>hello React ssr ----1122</div>
      <h1 onClick={addNum}>{num}</h1>
    </div>
  )
}