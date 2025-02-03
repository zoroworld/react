import { useState, useEffect } from "react";

function Modal({ show, setShow, modalSize }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      setAnimate(true);
    } else {
      setTimeout(() => setAnimate(false), 500); // ===Wait for animation to complete==
    }
  }, [show]);

  function handleCloseButton() {
    setShow(false); // ====This will trigger `useEffect` and start animation===
  }

  return (
    <>
      {(show || animate) && (
        <div className={`modal-backdrop ${show ? "show" : "hide"}`}>
          <div
            className={`modal-content ${show ? "modal-show" : "modal-hide"}`}
            style={{ width: `${modalSize}px` }}
          >
            <button className="closeBtn" onClick={handleCloseButton}>
              Close
            </button>
            <div className="modal-header">
              <h1>Modal Header</h1>
            </div>
            <hr />
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                similique officia consectetur reprehenderit labore? Facilis
                aliquid illum neque maxime sapiente!
              </p>
            </div>
            <hr />
            <div className="modal-footer">
              <div className="modal-footer-btn">
                <button>Submit</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
