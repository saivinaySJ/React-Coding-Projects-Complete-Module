function ExpensiveComputation({ onClick }) {
  console.log("Expensive Computation");
  return <button onClick={onClick}>Click me</button>;
}
export default ExpensiveComputation;
