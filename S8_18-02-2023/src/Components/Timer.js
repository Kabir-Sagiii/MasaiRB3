import { useState, useRef } from "react";

function Timer(props) {
  let interval = useRef(null); // interval = {current:null} //interval.current = <new Value>

  var interval_Id = 0; // re-created // did you lost setInterval id : Yes
  //We should store the data in normal varibale,
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    interval.current = setInterval(() => {
      //  interval_Id : we are storing idwhich is returned by setInterval
      setTimer((prevTimer) => prevTimer + 1); // 0
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  return (
    <div
      style={{
        width: "300px",
        padding: "50px",
        boxShadow: "0 0 10px red",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h3>Timer : {timer}</h3>
      <button onClick={startTimer}>Start</button>&nbsp; &nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
