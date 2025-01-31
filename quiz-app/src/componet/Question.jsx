import { useState } from "react";

function Question({ index, item, setScore }) {
  const [result, setResult] = useState("");
  const [isAnswer, setIsAnswere] = useState(false);

  function handleAnswere(e) {
    if (isAnswer) return;

    const isCorrect = item.correct === e.target.value;

    setResult(isCorrect ? "Correct" : "Incorrect");

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setIsAnswere(true);
  }

  return (
    <>
      <hr />
      <div className="question-container">
        <div className="questions">
          <h2>{item.question}</h2>
        </div>
        <div key={index} className="multiple-choice">
          {item.options.map((subitem, id) => {
            return (
              <div key={id} style={{ display: "flex" }}>
                <button
                  className="buttonOption"
                  disabled={isAnswer}
                  value={subitem}
                  onClick={handleAnswere}
                >
                  {subitem}
                </button>
              </div>
            );
          })}
          {result}
        </div>
      </div>
    </>
  );
}

export default Question;
