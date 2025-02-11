import { useState } from "react";
import "./App.css";
import useThrottle from "./hook/useThrottle";

function App() {
  const [inputValue, setInputValue] = useState("");
  const throttledValue = useThrottle(inputValue, 1000);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <h1>Throttle Example</h1>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <h1>
        <span>Throttled Value: </span>
        {throttledValue}
      </h1>
    </div>
  );
}

export default App;
