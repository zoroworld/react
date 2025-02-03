import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  const [show, setShow] = useState(false);
  const modalSize = "500";

  function handleClickEvent() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <button className="button" onClick={handleClickEvent}>
        Click Me
      </button>
      <Modal show={show} setShow={setShow} modalSize={modalSize} />
    </>
  );
}

export default App;
