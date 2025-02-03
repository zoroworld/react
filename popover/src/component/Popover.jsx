import { useEffect, useState } from "react";

function Popover({ show, setShow }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (show) {
      setAnimate(true);
    } else {
      setTimeout(() => setAnimate(false), 500);
    }
  }, [show]);
  return (
    <>
      {(show || animate) && (
        <div className={`popover-content ${show ? "show" : "hide"}`}>
          <div className="popover-header">
            <h4>popover header</h4>
          </div>
          <hr />
          <div className="popover-body">
            <p>popover para which is best in all thing...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Popover;
