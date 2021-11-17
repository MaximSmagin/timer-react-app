import React, { useState, useEffect } from "react";

function App() {

  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);


   function reset() {
     setTimer(0);
   }

  return (
    <div className="App">
      <h1>{timer}</h1>
      <button onClick={toggle}>Start</button>
      <button onClick={toggle}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
