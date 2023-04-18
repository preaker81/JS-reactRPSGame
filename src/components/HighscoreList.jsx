import React from "react";

export default function HighscoreList({ highScores }) {
  return (
    <div id="score-list">
      <h1>Highscore</h1>
      <ol>
        {highScores.map(([key, userObj]) => (
          <li key={key}>
            {userObj.name} - Score: {userObj.score}
          </li>
        ))}
      </ol>
    </div>
  );
}
