import React, { useState } from "react";

function GetAdvice() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function handleAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={handleAdvice}>Get Advice</button>
      <p>
        You are reading <strong>{count}</strong>
      </p>
    </div>
  );
}

export default GetAdvice;
