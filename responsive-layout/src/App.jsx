import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <header className="header">
          <h1>My Application</h1>
        </header>
        <main className="main-content">
          <section className="section-content">
            <aside className="sidebar">Aside</aside>
            <div className="content">
              <p>This is the main content area.</p>
              <p>Click count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p>Footer content goes here.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
