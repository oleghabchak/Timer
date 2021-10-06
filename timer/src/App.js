import React, {Component} from "react";
import moment from "moment"

const data = {
  timer: "00:43,25",
  laps: [213, 234, 235, 3532]
};

function Timer({ interval }) {
  const duration = moment.duration(interval)
  return  <div className='timer'>
      <p>
        { interval}
      </p>
    </div>
}

function Buttons({ color, title, background}) {
  return(
    <div className="buttBorder">
      <div className='button' style={{backgroundColor: background}}>
        <p style={{color}}>{title}</p>
      </div>
    </div>
  );
}

function LapList() {
  return(
    <div className="lapTable">
      <h2>lap1</h2>
      <h2>lap2</h2>
      <h2>lap3</h2>
    </div>
  )
  
}
export default class App extends Component {
  render() {
    return(
    <div className="container">
      <Timer interval={data.timer} />
      <div className="row">
          <Buttons color='#50D166' title="Start" background='#1B361F'/>
          <Buttons color='#FFF' title="Reset"  background='#333333' />
      </div>
      
      <LapList/>
    </div>
      )
  }
}