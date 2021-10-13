import React from "react";


const App = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  function LapTable ({lapTime, index }) {
    lapTime = time.toString();
    return(
      <div className="lapTable">
        <h3>Lap 1{index++} {lapTime} </h3>
      </div>
    )
  }


  return (
  <div className="container">
      
        <div className='timer'>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)},</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className="buttons">
          {!timerOn && (
            <div className="buttBorder">
              <button style={{color:'#50D167',backgroundColor: "#1B361F"}} onClick={() => setTimerOn(true)}>Start</button>
            </div>
            )}
          
          {timerOn && 
          <div className="buttBorder">
            <button style={{ color:'#E33935',backgroundColor: "#3C1715"}} onClick={() => setTimerOn(false)}>Stop</button>
          </div>
          }

          {!timerOn && (
            <div className="buttBorder">
              <button onClick={() => setTime(0)}>Reset</button>
            </div>
          )}

          {timerOn && (
            <div className="buttBorder">
              <button onClick={1}>Lap</button>
            </div>
          )}
        </div>
        <LapTable/>
            
    </div>
  );
};

export default App;