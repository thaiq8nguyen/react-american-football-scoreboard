import React from 'react';
import "./Scoreboard.css";

import BottomRow from "../BottomRow/BottomRow";



const ScoreBoard = ({scores}) => {
    return (
        <section className="scoreboard">
            <div className="topRow">
                <div className="home">
                    <h2 className="home__name">Lions</h2>
                    <div className="home__score">{scores.homeScore}</div>
                </div>
                <div className="timer">00:03</div>
                <div className="away">
                    <h2 className="away__name">Tigers</h2>
                    <div className="away__score">{scores.awayScore}</div>
                </div>
            </div>
            <BottomRow/>
        </section>
    )
}

export default ScoreBoard
