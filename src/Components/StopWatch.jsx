import React from "react";
import { useEffect } from "react";
import { useState } from "react";
/*
function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedMilliSeconds, setElapsedMilliSeconds] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedMilliSeconds((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  function handleStopwatch() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setIsRunning(false);
    setElapsedMilliSeconds(0);
  }

  const seconds = Math.floor(elapsedMilliSeconds / 1000);
  const milliseconds = elapsedMilliSeconds % 1000;
  return (
    <div>
      <h2>Stopwatch</h2>
      <div>
        {seconds}.{milliseconds.toString().padStart(2, "0")}
      </div>
      <button onClick={handleStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;

 */

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedMilliSeconds, setElapsedMilliSeconds] = useState(0);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedMilliSeconds((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function handleStopwatch() {
    setIsRunning(!isRunning);
  }
  function handleReset() {
    setIsRunning(false);
    setElapsedMilliSeconds(0);
  }

  const seconds = Math.floor(elapsedMilliSeconds / 1000);
  const milliseconds = elapsedMilliSeconds % 1000;
  return (
    <div>
      <h2>StopWatch</h2>
      <div>
        {seconds}.{milliseconds.toString().padStart(2, "0")}
      </div>
      <button onClick={handleStopwatch}>{isRunning ? "Stop" : "start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
