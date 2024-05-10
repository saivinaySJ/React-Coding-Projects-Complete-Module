import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(0);

  function expensiveComputation(value) {
    console.log("Expensive Computation");
    return value * 2;
  }

  const memoizedResult = useMemo(() => expensiveComputation(count), [count]);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
      <p>Count:{count}</p>
      <p>Memoized Result:{memoizedResult}</p>
    </div>
  );
}

export default UseMemoHook;
