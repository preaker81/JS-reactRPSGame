import React, { useState, useEffect } from "react";
import NameForm from "./components/NameForm";
import Choices from "./components/Choices";
import GameResults from "./components/GameResults";
import HighscoreList from "./components/HighscoreList";
import PlayAgain from "./components/PlayAgain";
import HighscoreManager from "./components/HighscoreManager";

export default function App() {
  const [nameInputValue, setNameInputValue] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [playerResult, setPlayerResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  const [gameMessage, setGameMessage] = useState("");
  const choices = ["rock", "paper", "scissors"];
  const [playerScore, setPlayerScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [newHighscoreEntry, setNewHighscoreEntry] = useState(null);

  function handleInputChange(e) {
    setNameInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const playerName = nameInputValue === "" ? "Player" : nameInputValue;
    setSubmittedName(playerName);
    setNameInputValue("");
    console.log(playerName); // Logging the name
  }

  function handleRPSChoice(e) {
    gameResult(e.target.value, handleComputerChoice());
  }

  function handleComputerChoice() {
    let computerChoice;
    const computerChoiceNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[computerChoiceNumber];
    return computerChoice;
  }

  function gameResult(playerChoice, computerChoice) {
    const playerName = submittedName === "" ? "Player" : submittedName;
    setPlayerResult(`${playerName}: ${playerChoice}`);
    setComputerResult(`Computer: ${computerChoice}`);

    if (playerChoice === computerChoice) {
      setGameMessage("Tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      setGameMessage("Player wins!");
      scoreIncrement();
    } else {
      setGameMessage("Computer wins!");
      setGameOver(true);
      endGame(playerName);
      PlayAgain(gameOver);
    }
  }

  function scoreIncrement() {
    setPlayerScore(playerScore + 1);
  }

  function endGame(playerName) {
    const newHighScoreEntry = [
      "newEntry", // Add a key for the new entry
      {
        name: playerName,
        score: playerScore,
      },
    ];
    setNewHighscoreEntry(newHighScoreEntry);
    setPlayerScore(0);
  }

  function resetGame() {
    setGameOver(false);
    setGameMessage("");
    setPlayerResult("");
    setComputerResult("");
    setSubmittedName("");
  }

  return (
    <>
      <HighscoreManager
        setHighScores={setHighScores}
        newHighscoreEntry={newHighscoreEntry}
      />

      <NameForm
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        inputValue={nameInputValue}
        gameOver={gameOver}
      />

      {submittedName && <p>Player: {submittedName}</p>}

      <Choices onChoiceClick={handleRPSChoice} gameOver={gameOver} />

      {submittedName && <p>Player: {submittedName}</p>}
      <p>Score: {playerScore}</p>

      <GameResults
        playerResult={playerResult}
        computerResult={computerResult}
        gameMessage={gameMessage}
      />

      <HighscoreList highScores={highScores} />
      <PlayAgain gameOver={gameOver} onPlayAgain={resetGame} />
    </>
  );
}
