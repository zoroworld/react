import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const boardSize = 10;

  useEffect(() => {
    let newcell = [];
    for (let row = 0; row < boardSize; row++) {
      let rowCell = [];
      for (let col = 0; col < boardSize; col++) {
        let cellNo = row * boardSize + col + 1;
        rowCell.push(cellNo);
      }
      if (row % 2 === 0) {
        rowCell.reverse();
      }

      newcell = [...newcell, ...rowCell];
    }

    setData(newcell);
  }, []);

  return (
    <>
      <div className="snake-ladder-board-container">
        <div className="snake-ladder-board-contain">
          {data.map((item, index) => {
            return (
              <div key={index} className="game-cell">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
