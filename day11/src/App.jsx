import React, { useEffect, useRef, useState } from "react";

function Timer() {
    const [timeInSec, setTimeInSec] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        console.log("========= setting interval =====");

        intervalRef.current = setInterval(() => {
            setTimeInSec((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const handlePause = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsTimerRunning(false);
    };

    const handlePlay = () => {
        if (!isTimerRunning) {
            intervalRef.current = setInterval(() => {
                setTimeInSec((prevTime) => prevTime + 1);
            }, 1000);
            setIsTimerRunning(true);
        }
    };

    return (
        <div>
            <h1>{timeInSec} sec</h1>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handlePlay}>Play</button>
        </div>
    );
}

export default Timer;
