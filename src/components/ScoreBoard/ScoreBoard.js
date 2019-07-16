import React, { useState, useEffect, useLayoutEffect } from 'react';
import "./Scoreboard.css";
import {format, setMinutes, setSeconds, addSeconds, isAfter} from "date-fns";

import BottomRow from "../BottomRow/BottomRow";



const ScoreBoard = ({scores, isPlaying}) => {
    
    const current = new Date();
    let start = setMinutes(setSeconds(current,0),0);
    
    const {homeScore, awayScore} = scores;
    const [time, setTime] = useState(start);
    const quarterDuration = setMinutes(setSeconds(current,), 1);

    useEffect(() => {
        const isEndOfQuarter =  (time) => {

            return isAfter(time, quarterDuration);
        }
        
        if(!isPlaying && !isEndOfQuarter(time)) {
            const interval = setInterval(()=> {       
                setTime(time => addSeconds(time,1))
            },1000)
            return () => {
                clearInterval(interval)
            }    
        }

        

    },[isPlaying, time, quarterDuration])
    
    
    const formatTimer = (time) => {
        return format(time, "mm:ss");
    }

    

    //console.log(isEndOfQuarter(time));
    return (
        <section className="section scoreboard has-text-centered">
            
                <div className="columns topRow">
                    <div className="column is-one-third has-text-centered">
                        <div className="home">
                            <h2 className="home__name">Lions</h2>
                            <div className="home__score">{homeScore}</div>
                        </div>
                        
                    </div>
                    <div className="column is-one-third has-text-centered">
                        <div className="timer">
                            <h1>{formatTimer(time)}</h1>
                        </div>
                        
                    </div>
                    <div className="column is-one-third has-text-centered">
                        <div className="away">
                            <h2 className="away__name">Tigers</h2>
                            <div className="away__score">{awayScore}</div>  
                        </div>        
                    </div>
                </div>
            
            
            
            <BottomRow/>
        </section>
    )
}

export default ScoreBoard
