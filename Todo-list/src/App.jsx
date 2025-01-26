import { useState } from "react";
import "./App.css";
import WorkTitle from "./WorkTitle";

function App() {
  const [title, setTitle] = useState("");
  const [workList, setWorkList] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  // Add new task
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (title.trim()) {
      setWorkList((prev) => [...prev, title.trim()]);
      setTitle(""); // Clear input
    }
  };

  return (
    <div className="app-container">
      <h1>TODO LIST</h1>
      {/* Input form */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="input-field"
        />
        <button type="submit" className="add-button">
          ADD
        </button>
      </form>

      {/* Task list */}
      <div className="task-list">
        {workList.map((item, index) => (
          <WorkTitle
            key={index}
            title={item}
            workList={workList}
            setWorkList={setWorkList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
