import { useCallback, useState } from "react";
import ExpensiveComputation from "./ExpensiveComputation";

function ParentCallbackFunction() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);
  return (
    <div>
      <ExpensiveComputation onClick={handleClick} />
      <p>Count:{count}</p>
    </div>
  );
}
export default ParentCallbackFunction;
