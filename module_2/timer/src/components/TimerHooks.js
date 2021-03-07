import React, {useState, useEffect} from 'react';
import '../timer-func.css';

//komponent funkcyjny ze stanem (hooks)
function TimerHooks() {
    let [time, changeSeconds] = useState(0);

    useEffect(()=> {
      const countTime = setInterval(()=> {
        changeSeconds(time += 1);
      }, 1000);
    });

    return (
      <div className="timer-function__outer">
        <p className="timer-function__timer">Timer (komponent funkcyjny z hooks): {time}s</p>
    </div>
    );
  }

  export default TimerHooks;