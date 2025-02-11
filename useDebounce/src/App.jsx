import { useState } from "react";
import "./App.css";
import { useDebounce } from "./hook/useDebounce";

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000);

  function handleDebounceChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className="card">
        <input
          type="text"
          onChange={handleDebounceChange}
          placeholder="Type to search ..."
        />
        <h1>
          <span>Debounce: </span>
          <span>{debouncedValue ? debouncedValue : "...loading"}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
