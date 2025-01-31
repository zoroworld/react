import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputLength = 8;
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInput, setUserInput] = useState(Array(inputLength).fill(""));
  const inputs = useRef([]);

  // Handle Input Change
  function handleInputChange(e, index) {
    let value = e.target.value;

    // Allow only numbers and ensure only one digit per input field
    if (!isNaN(value) && value.trim() !== "" && value.length === 1) {
      const newUserInput = [...userInput];
      newUserInput[index] = value;
      setUserInput(newUserInput);

      // Move focus to the next input if not the last field
      if (index < inputLength - 1) {
        setActiveIndex(index + 1);
      }
    }
  }

  // Handle Key Events (Only Backspace)
  function handleKeyDown(e, index) {
    if (e.key === "Backspace") {
      const newUserInput = [...userInput];

      if (userInput[index]) {
        // If there is a value, clear it
        newUserInput[index] = "";
      } else if (index > 0) {
        // If empty, move focus to the previous field and clear it
        newUserInput[index - 1] = "";
        setActiveIndex(index - 1);
      }

      setUserInput(newUserInput);
    }
  }

  // Handle OTP Paste (Distribute pasted OTP into input fields)
  function handlePaste(e) {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();

    let numbersOnly = [];
    for (let char of pasteData) {
      if (!isNaN(char) && char !== " ") {
        numbersOnly.push(char);
      }
      if (numbersOnly.length === inputLength) break; // Stop if we reach input length
    }

    if (numbersOnly.length > 0) {
      const newUserInput = [...Array(inputLength)].map(
        (_, i) => numbersOnly[i] || ""
      );
      setUserInput(newUserInput);

      // Set focus to the last entered digit
      setActiveIndex(Math.min(numbersOnly.length, inputLength - 1));
    }
  }

  // Auto-focus the active input field
  useEffect(() => {
    if (inputs.current[activeIndex]) {
      inputs.current[activeIndex].focus();
    }
  }, [activeIndex]);

  return (
    <div className="otp-login">
      <h1>OTP LOGIN</h1>
      <div className="input-container">
        {userInput.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="inputtext"
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            onClick={() => setActiveIndex(index)} // Click to focus on input
            ref={(el) => (inputs.current[index] = el)}
            value={userInput[index]}
            style={{
              border: activeIndex === index ? "5px solid red" : "",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
