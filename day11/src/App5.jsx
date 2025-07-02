import { useEffect, useState, useRef } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const intervalRef = useRef(null);

    // Start the timer when isTimerRunning is true
    useEffect(() => {
        if (isTimerRunning) {
            intervalRef.current = setInterval(() => {
                setTimeInSec((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        // Clean up the interval on unmount or when isTimerRunning changes
        return () => clearInterval(intervalRef.current);
    }, [isTimerRunning]);

    const handlePause = () => {
        setIsTimerRunning(false);
    };

    const handlePlay = () => {
        setIsTimerRunning(true);
    };

    return (
        <div>
            <h2>00:00:{timeInSec < 10 ? `0${timeInSec}` : timeInSec}</h2>
            {isTimerRunning ? (
                <button onClick={handlePause}>PAUSE</button>
            ) : (
                <button onClick={handlePlay}>PLAY</button>
            )}
        </div>
    );
};

export default App;
