
import React, { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Controller from "./components/Controller/Controller";


function App() {
  
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const touchDownScoreValue = 7;
  const fieldGoalScoreValue = 3;

  
  const handleTouchDownScore = (team) => {
    if(team === "home") {
      const newScore = homeScore + touchDownScoreValue;
      setHomeScore(newScore);
    } else {
      const newScore = awayScore + touchDownScoreValue;
      setAwayScore(newScore);
    }
    
  }

  const handleFieldGoalScore = (team) => {

    if(team === "home") {
      const newScore = homeScore + fieldGoalScoreValue;
      setHomeScore(newScore)
    } else {
      const newScore = awayScore + fieldGoalScoreValue;
      setAwayScore(newScore)
    }
    
  }
  return (
    <div className="container">
      <ScoreBoard scores={{homeScore: homeScore, awayScore: awayScore}}/>
      <Controller handleTouchDownScore={handleTouchDownScore} handleFieldGoalScore={handleFieldGoalScore}/>
    </div>
  );
}

export default App;
