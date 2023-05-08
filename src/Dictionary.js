import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for '${keyword}' definition...`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=edf069311acf2bebo10f4bbbc53249t3`;
  }

  function handleResponse(event) {
    console.log(event);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
