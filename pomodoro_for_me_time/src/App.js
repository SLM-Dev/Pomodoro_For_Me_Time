import React, { useState} from 'react';
import './App.css';


  function padTime(time) {
    return time.toString().padStart(2, '0');
  }




  export default function App(){
    const [title, setTitle] = useState('Start The Count Down');
    const [timeLeft, setTimeLeft] = useState(10);

    
function startTimer() {
  setInterval(() => {
    setTimeLeft(timeLeft => {
      if (timeLeft >= 1) return timeLeft -1;


// reset the timer



      return 0;
    });
  }, 1000)
}



const minutes = Math.floor(timeLeft/ 60)
const seconds = (timeLeft - minutes * 60)

  return (
    <div className="app">
      <h2>{title}</h2>
    
    <div className="timer">
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
    

  <div className="button">
    <button onClick={startTimer}>Start</button>
    <button>Stop</button>
    <button>Reset</button>
  </div>
</div>
  );
}
