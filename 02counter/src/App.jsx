import { useState } from "react";

function App() {
  let counter = 5;

let[counterValue, setCounterValue] = useState(10);

  const addValue = () => {
    if(counterValue >= 10) {
      console.log("Counter Value:", counterValue);
      return;
    }
    setCounterValue(counterValue + 1);
    // counter += 1;
    // console.log("Counter Value:", counter);
  };
  const removeValue = () => {
   if(counterValue <= 0) {
      console.log("Counter Value:", counterValue);
      return;
    }
      setCounterValue(counterValue - 1);
    // counter -= 1;
    // console.log("Counter Value:", counter);
  };
  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Counter Value:{counterValue}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
