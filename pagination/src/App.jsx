import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

function App() {
  const getIndex = 5;
  const datafield = 100;
  const numberOfItemPerPage = parseInt(datafield / getIndex);

  const [pageIndex, setPageIndex] = useState(Array(getIndex).fill(0));
  const [activeindex, setActiveIndex] = useState(0);
  const refpoint = useRef([]);
  const [data, setData] = useState([]);

  function handlePageIndex(index) {
    setActiveIndex(index);
  }

  function handlePrev() {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleNext() {
    setActiveIndex((prev) => (prev < getIndex - 1 ? prev + 1 : prev));
  }

  useEffect(() => {
    if (refpoint[activeindex]) {
      refpoint.current[activeindex].focus();
    }
  }, [activeindex]);

  useEffect(() => {
    const dataAll = [datafield];
    console.log(dataAll);

    for (let i = 0; i < datafield; i++) {
      dataAll[i] = i + 1;
    }
    setData(dataAll);
  }, []);

  const paginatedData = useMemo(() => {
    const startIndex = activeindex * numberOfItemPerPage;
    const endIndex = Math.min(startIndex + numberOfItemPerPage, data.length);
    return data.slice(startIndex, endIndex);
  }, [activeindex, data, numberOfItemPerPage]);

  return (
    <>
      <div className="allDatapagination-container">
        <h1>Pagination</h1>
        <div className="allData-container">
          {console.log(data)}
          {paginatedData.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
        <div className="pagination-container">
          <button disabled={activeindex <= 0} onClick={handlePrev}>
            Prev
          </button>
          {pageIndex.map((_, index) => {
            return (
              <button
                style={{ border: activeindex === index ? "2px solid red" : "" }}
                ref={(el) => (refpoint.current[index] = el)}
                key={index}
                onClick={() => handlePageIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button disabled={activeindex >= getIndex - 1} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
