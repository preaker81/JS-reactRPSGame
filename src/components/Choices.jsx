import React from "react";

export default function Choices({ onChoiceClick, gameOver }) {
  return (
    <div className="RPSContainer">
      <button
        className="RPSButtons"
        value="rock"
        onClick={onChoiceClick}
        disabled={gameOver}
      >
        Rock
      </button>
      <button
        className="RPSButtons"
        value="paper"
        onClick={onChoiceClick}
        disabled={gameOver}
      >
        Paper
      </button>
      <button
        className="RPSButtons"
        value="scissors"
        onClick={onChoiceClick}
        disabled={gameOver}
      >
        Scissor
      </button>
    </div>
  );
}
