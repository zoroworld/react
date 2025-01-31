import { FaStar } from "react-icons/fa";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
function App() {
  const [hoverEffect, setHoverEffect] = useState(-1);
  const [getClick, setGetClick] = useState(-1);
  const [count, setCount] = useState(0);

  function getHoveredEffect() {
    setHoverEffect(-1);
  }

  function handleOutsideClick() {
    if (!event.target.closest(".star-container")) {
      setGetClick(-1);
      setCount(0);
    }
  }

  function handleClick(i) {
    setCount(i + 1);
    setGetClick(i);
  }

  function handleEnter(i) {
    setHoverEffect(i);
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const startRender = useMemo(() => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <div
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleEnter(i)}
        >
          <FaStar
            color={i <= hoverEffect || i <= getClick ? "yellow" : "lightgrey"}
            fontSize={30}
          />
        </div>
      );
    }

    return stars;
  }, [hoverEffect, getClick]);

  return (
    <>
      <div className="star-container">
        <div className="star-contain" onMouseLeave={getHoveredEffect}>
          {startRender}
        </div>
        <div className="start-count">{count}</div>
      </div>
    </>
  );
}

export default App;
