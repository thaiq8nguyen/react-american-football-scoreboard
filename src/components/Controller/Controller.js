import React from 'react'
import "./Controller.css";

const Controller = ({handleTouchDownScore, handleFieldGoalScore, toggleTimer, isPlaying}) => {
    return (
        <section className="buttons">
            <h1 className="has-text-white is-size-5 has-text-weight-bold">Game Controllers</h1>
            <div className="homeButtons">      
                <button className="homeButtons__touchdown" onClick={() => handleTouchDownScore("home")}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={() => handleFieldGoalScore("home")}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={() => handleTouchDownScore("away")}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={() => handleFieldGoalScore("away")}>Away Field Goal</button>
                
            </div>
            <div className="settingButton">
                <button className="button is-success is-large" onClick={toggleTimer}>{isPlaying ? "Start":"Pause"}</button>
            </div>
        </section>
    )
}

export default Controller;
