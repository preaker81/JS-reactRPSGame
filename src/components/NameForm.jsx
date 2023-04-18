import React from "react";

export default function NameForm({ onSubmit, onChange, inputValue, gameOver }) {
  return (
    <form onSubmit={onSubmit} className="new-player-form">
      <h1 className="header">Rock, Scissor, Paper</h1>
      <div className="input-div">
        <label htmlFor="nameInput">Enter name:</label>
        <input
          type="text"
          id="nameInput"
          value={inputValue}
          onChange={onChange}
          disabled={gameOver}
        />
      </div>
      <button className="nameButton" disabled={gameOver}>
        Submit
      </button>
    </form>
  );
}
