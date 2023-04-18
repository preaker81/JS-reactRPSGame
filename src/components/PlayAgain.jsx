import React from "react";

export default function PlayAgain({ gameOver, onPlayAgain }) {
  if (!gameOver) {
    return null;
  }

  return (
    <div className="playAgainContainer">
      <button className="playAgainBtn" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}