import React from "react";
import Dictionary from "./Dictionary";
import Meanings from "./Meanings";

export default function Definitions(response) {
  console.log(response.definitions);
  if (response.definitions) {
    return (
      <div>
        <h2>{response.definitions.word}</h2>
        {response.definitions.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
