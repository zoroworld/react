import { useEffect, useState } from "react";

function Question() {
  const [data, setData] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(() =>
    Array(data.length).fill("")
  );

  function startGame() {
    setGameStart(true);
    setGameComplete(true);
  }

  //   handle the option
  function handleOptionOdQuestion(selectedOption) {
    setSelectedOptions((prev) => [...prev, selectedOption]);
  }

  function handlePrevClick() {
    setActiveQuestionIndex(activeQuestionIndex - 1);
  }

  function handleEndGame() {
    setGameStart(false);
  }

  function handleCompleGame() {
    setGameComplete(false);
  }

  function handleNextClick() {
    if (
      selectedOptions[activeQuestionIndex] === data[activeQuestionIndex].correct
    ) {
      setCurrentScore((prev) => prev + 1);
    }
    setActiveQuestionIndex(activeQuestionIndex + 1);
  }

  useEffect(() => {
    const response = fetch("../questionSheet.json");
    response
      .then((response) => response.json())
      .then((data) => {
        setData(data.questions);
      });
  }, []);
  return (
    <>
      {console.log(data)}
      {gameStart ? (
        gameComplete ? (
          <div className="game-start">
            <div>
              <h1>Start Game </h1>
            </div>
            <div className="All-question">
              <div className="question-ask">
                {data?.[activeQuestionIndex].question}
              </div>
              <div className="option-container">
                {data?.[activeQuestionIndex].options.map((option, index) => {
                  return (
                    <div key={index} className="question-options">
                      <button
                        style={{
                          width: "100%",
                          backgroundColor:
                            selectedOptions[activeQuestionIndex] === option
                              ? "grey"
                              : "",
                        }}
                        onClick={() => handleOptionOdQuestion(option)}
                      >
                        {option}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="button-holder">
              {gameStart && gameComplete && (
                <button
                  onClick={handlePrevClick}
                  disabled={activeQuestionIndex === 0}
                >
                  Prev
                </button>
              )}

              {gameStart &&
                gameComplete &&
                activeQuestionIndex !== data?.length - 1 && (
                  <button onClick={handleNextClick}>Next</button>
                )}

              {gameStart &&
                gameComplete &&
                activeQuestionIndex !== data?.length - 1 && (
                  <button onClick={handleCompleGame}>Submit</button>
                )}
            </div>
          </div>
        ) : (
          <div className="End-game-container">
            <div className="Completegame">
              <div>
                <h1>SCORE:{currentScore}</h1>
              </div>
              {data?.map((question, index) => {
                return (
                  <div key={index} className="result-question">
                    <div>
                      <strong>{question.question}</strong>
                    </div>
                    <div>Your Answer: {selectedOptions[index]}</div>
                    <div>Correct Answer: {question.correct}</div>
                  </div>
                );
              })}
            </div>
            <div className="buttons">
              <button onClick={handleEndGame}>End Game</button>
            </div>
          </div>
        )
      ) : (
        // start the game
        <div className="game-starting-poin">
          <h1>Instruction</h1>
          <ul>
            <li>Do not reapeat</li>
            <li>Do not cheat</li>
            <li>Share the screen</li>
            <li>Do not refresh</li>
          </ul>
          <button onClick={startGame}>Start</button>
        </div>
      )}
    </>
  );
}

export default Question;
