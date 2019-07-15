
import React, { useState } from "react";
import "bulma";
import "./App.css";
import backgroundURL from "./assets/images/a_football_on_a_grass_field.jpg";
import Navbar from "./components/Navbar/Navbar";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Controller from "./components/Controller/Controller";



function App() {
  
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [gameTimer, setGameTimer] = useState(true);

  const touchDownScoreValue = 7;
  const fieldGoalScoreValue = 3;

  const backGroundStyles = {
    backgroundImage: `url(${backgroundURL})`,
    minWidth: "100%",
    minHeight: "100%",
    backgroundPosition: "center",
    position: "fixed"
  }

  
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
    <div>
      <Navbar/>
      <div className="section" style={backGroundStyles}>
      
      <div className="columns">
        <div className="column is-three-quarters">
          <ScoreBoard scores={{homeScore: homeScore, awayScore: awayScore}} isPlaying={gameTimer}/>
        </div>
        <div className="column is-one-quarter">
          <Controller 
            handleTouchDownScore={handleTouchDownScore} 
            handleFieldGoalScore={handleFieldGoalScore} 
            toggleTimer={()=>setGameTimer(!gameTimer)}
            isPlaying={gameTimer}
            />
        </div>
      </div>
      
      
    </div>
    </div>
    
  );
}

export default App;
