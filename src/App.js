import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        Open source code by Catherine, published on{" "}
        <a
          href="https://github.com/CathGlover/react-dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
