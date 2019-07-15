import React from 'react'
import "./Controller.css";

const Controller = ({handleTouchDownScore, handleFieldGoalScore}) => {
    return (
        <section className="buttons">
            <div className="homeButtons">      
                <button className="homeButtons__touchdown" onClick={() => handleTouchDownScore("home")}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={() => handleFieldGoalScore("home")}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={() => handleTouchDownScore("away")}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={() => handleFieldGoalScore("away")}>Away Field Goal</button>
            </div>
        </section>
    )
}

export default Controller;
