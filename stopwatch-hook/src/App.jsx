import { useState } from "react";
import "./App.css";
import useTimer from "./hook/useTimer";

function App() {
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [complete, setComplete] = useState(false);

  const { current, setCurrent } = useTimer(0, active, paused, complete);

  function handleStartandResume() {
    if (!paused && active) {
      setPaused(true);
    } else if (paused && active) {
      setPaused(false);
      setActive(true);
    } else {
      setActive(true);
    }
  }

  function handleResetButton() {
    setCurrent(0);
    setActive(false);
  }

  return (
    <>
      <h1>Start The Timer</h1>
      <div className="card">
        <div className="display-timer">
          <h1>
            {(() => {
              let sec = current % 60;
              let min = Math.floor((current / 60) % 60);
              let hour = Math.floor(current / 3600);

              return `${("0" + hour).slice(-2)} : ${("0" + min).slice(-2)} : ${(
                "0" + sec
              ).slice(-2)}`;
            })()}
          </h1>
          {/* {console.log(active)} */}
        </div>
        <div className="buttonContain">
          <button onClick={handleStartandResume}>
            {paused ? "Resume" : "Start"}
          </button>
          <button onClick={handleResetButton}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
