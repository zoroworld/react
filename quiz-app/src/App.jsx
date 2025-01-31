import { useEffect, useState } from "react";
import "./App.css";
import Question from "./componet/Question";

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "Which of the following is a basic hook in React?",
      options: ["useReducer()", "useMemo()", "useCallback()", "useContext()"],
      correct: "useContext()",
    },
    {
      question: "What is the default value of a state in React?",
      options: ["null", "undefined", "false", "depends on the initial value"],
      correct: "depends on the initial value",
    },
    {
      question: "Which method is used to render a React component?",
      options: ["render()", "ReactDOM.render()", "mount()", "createElement()"],
      correct: "ReactDOM.render()",
    },
    {
      question: "What is the purpose of the useEffect hook in React?",
      options: [
        "To handle state",
        "To handle side effects",
        "To handle routing",
        "To update the DOM",
      ],
      correct: "To handle side effects",
    },
    {
      question:
        "How do you pass data from a parent component to a child component in React?",
      options: [
        "using props",
        "using state",
        "using useState()",
        "using context",
      ],
      correct: "using props",
    },
    {
      question:
        "Which of the following is a valid way to create a React component?",
      options: [
        "const Component = () => {}",
        "function Component() {}",
        "class Component extends React.Component {}",
        "All of the above",
      ],
      correct: "All of the above",
    },
    {
      question: "Which method is used to update the state in React?",
      options: [
        "setState()",
        "updateState()",
        "modifyState()",
        "changeState()",
      ],
      correct: "setState()",
    },
    {
      question:
        "Which of the following is true about the virtual DOM in React?",
      options: [
        "It is a lightweight representation of the real DOM",
        "It directly manipulates the real DOM",
        "It is slower than the real DOM",
        "It is not used in React",
      ],
      correct: "It is a lightweight representation of the real DOM",
    },
    {
      question: "What is JSX in React?",
      options: [
        "JavaScript XML",
        "JavaScript Extensible Syntax",
        "JavaScript Syntax Extension",
        "JavaScript XML Schema",
      ],
      correct: "JavaScript XML",
    },
    {
      question: "What does the 'key' prop do in React?",
      options: [
        "Identifies which items have changed",
        "Specifies the component name",
        "Manages the component's state",
        "Triggers re-rendering",
      ],
      correct: "Identifies which items have changed",
    },
  ];

  useEffect(() => {
    setData(questions);
  }, []);

  return (
    <>
      {score}
      {data.map((item) => {
        return <Question key={item.question} item={item} setScore={setScore} />;
      })}
    </>
  );
}

export default App;
