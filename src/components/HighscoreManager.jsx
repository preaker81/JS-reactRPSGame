import { useEffect } from "react";

export default function HighscoreManager({ setHighScores, newHighscoreEntry }) {
  useEffect(() => {
    getHighscore();
  }, []);

  async function getHighscore() {
    const url =
      "https://reacthighscore-default-rtdb.europe-west1.firebasedatabase.app/highscores.json";
    const response = await fetch(url);
    const data = await response.json();
    const highScore = Object.entries(data);
    highScore.sort((a, b) => b[1].score - a[1].score);
    setHighScores(highScore);
    return highScore;
  }

  useEffect(() => {
    if (newHighscoreEntry) {
      updateHighscores(newHighscoreEntry);
    }
  }, [newHighscoreEntry]);

  async function updateHighscores(newEntry) {
    const highscores = await getHighscore();
    highscores.push(newEntry);
    highscores.sort((a, b) => b[1].score - a[1].score).splice(5);

    const url =
      "https://reacthighscore-default-rtdb.europe-west1.firebasedatabase.app";

    const updatePromises = highscores.map(async (entry, i) => {
      const userKey = `user${i + 1}`;
      await fetch(`${url}/highscores/${userKey}.json`, {
        method: "PUT",
        body: JSON.stringify(entry[1]),
        headers: { "Content-Type": "application/json" },
      });
    });

    await Promise.all(updatePromises);
  }

  return null;
}
