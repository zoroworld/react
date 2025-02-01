import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const noOfItems = 10;
  const windowSize = 4;
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideIntervalRef = useRef(null);

  useEffect(() => {
    const allData = [];
    for (let i = 0; i < noOfItems; i++) {
      allData.push(i + 1);
    }
    setData(allData);
  }, []);

  const handleNext = () => {
    clearInterval(slideIntervalRef.current);
    setActiveIndex((prev) => Math.min(prev + 1, noOfItems - windowSize));
  };

  const handlePrev = () => {
    clearInterval(slideIntervalRef.current);
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev + windowSize < noOfItems) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 2000);

    return () => {
      clearInterval(slideIntervalRef.current);
    };
  }, []);

  const visibleData = data.slice(activeIndex, activeIndex + windowSize);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-contain">
          <div className="carousel-slide">
            {visibleData.map((item, index) => (
              <div key={index} className={`itemsget items-${item}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="carousel-prev-next">
            <button
              className="prev"
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              Prev
            </button>
            <button
              className="next"
              onClick={handleNext}
              disabled={activeIndex + windowSize >= noOfItems}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
