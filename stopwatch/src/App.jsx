import { useEffect, useState, useMemo } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // Store interval ID

  // Start the timer
  function handleStartTime() {
    if (!startTime) {
      setStartTime(true);
    }
  }

  // Stop the timer
  function handleStopTime() {
    setStartTime(false);
    clearInterval(intervalId); // Clear interval when stopping
  }

  // Reset the timer
  function handleResetTime() {
    setStartTime(false);
    setTime(0); // Reset time to 0
    clearInterval(intervalId); // Clear interval on reset
  }

  // Update time every second
  useEffect(() => {
    if (startTime) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1
      }, 100); // Update every second
      setIntervalId(id); // Store the interval ID
    } else {
      clearInterval(intervalId); // Clear interval when not running
    }

    return () => clearInterval(intervalId); // Cleanup on component unmount or when startTime changes
  }, [startTime]); // Depend on startTime to start/stop interval

  // Format time as HH:MM:SS
  const formattedTime = useMemo(() => {
    const sec = time % 60;
    const min = Math.floor(time / 60) % 60;
    const hour = Math.floor(time / 3600);

    return `${("0" + hour).slice(-2)}:${("0" + min).slice(-2)}:${(
      "0" + sec
    ).slice(-2)}`;
  }, [time]);

  return (
    <>
      <div className="stop-watch-container">
        <div className="timer">
          <h1>{formattedTime}</h1>
        </div>
        <div className="stop-watch-btn">
          <button onClick={handleStartTime} disabled={startTime}>
            Start
          </button>
          <button onClick={handleStopTime} disabled={!startTime}>
            Stop
          </button>
          <button onClick={handleResetTime}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
