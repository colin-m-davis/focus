import React, { useState, useEffect } from 'react';
import "./Timer.css";

function Timer() {
    const focusSeconds = 1500; // Duration of focus period (seconds)
    const breakSeconds = 300; // Duration of break period (seconds)

    const [secondsLeft, setSecondsLeft] = useState(focusSeconds);
    const [isBreak, setIsBreak] = useState(false);

    let displayIsBreak = isBreak ? "Break" : "Focus";
    let displayMinutesLeft = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    let displaySecondsLeft = String(secondsLeft % 60).padStart(2, "0");

    let style = {
        backgroundColor: isBreak ? "white" : "#222222",
        color: isBreak ? "#222222": "white",
        transition: "all 2s ease",
        WebkitTransition: "all 2s ease",
        MozTransition: "all 2s ease",
    }

    useEffect(() => {
        if (secondsLeft == 0) {
            setSecondsLeft(isBreak ? focusSeconds : breakSeconds);
            setIsBreak(!isBreak);
        }
        const interval = setInterval(() => {
            setSecondsLeft(secondsLeft-1);
        }, 1000);

        return () => clearInterval(interval);

    }, [isBreak, secondsLeft])

    return (
        <div style={style}>
            <div className = "timer">
                <h3>{displayIsBreak}</h3>
                <h1>{displayMinutesLeft}:{displaySecondsLeft}</h1>
            </div>

            <div className = "contact">
                <div className = "overlay">
                    <a href= "https://colindavis.xyz" >Contact</a>
                    <a href= "https://github.com/colin-m-davis/focus" >GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Timer;