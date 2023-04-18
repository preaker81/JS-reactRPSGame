import React from "react";

export default function GameResults({ playerResult, computerResult, gameMessage }) {
  return (
    <div className="gameResults">
      <ol>
        <li>{playerResult}</li>
        <li>{computerResult}</li>
        <li>{gameMessage}</li>
      </ol>
    </div>
  );
}
