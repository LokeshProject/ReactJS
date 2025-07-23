import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(1);
let multipliedValue= count * 5
  const Multiple = () => {
    // setMultipliedValue(count * 5);
    setCount(count + 1);
    console.log("Count is now: ", count);
  };

  return (
    <>
      <h1>Main value:{count}</h1>
      <button onClick={Multiple}>Clck to Multiplay by 5</button>
      <h2>Multiplied Value:{multipliedValue}</h2>
    </>
  );
}

export default App;
