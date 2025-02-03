import { useState } from "react";
import "./App.css";
import Popover from "./component/Popover";

function App() {
  const [show, setShow] = new useState(false);

  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <div>
        <h1>POP OVERS</h1>
      </div>
      <div className="popover-container">
        <button className="popover" onClick={handleClick}>
          Click
        </button>
        <Popover show={show} setShow={setShow} />
      </div>
    </>
  );
}

export default App;
