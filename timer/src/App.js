import React, {Component} from "react";
import ReactDOM from 'react-dom';
import moment from "moment"


function Timer({ interval }) {
  const time = moment.duration(interval)
  return (
  <div className='timer'>
      <p>
        {time.minutes()}:{time.seconds()},{time.milliseconds()}
      </p>
    </div>
  )}

function Buttons({ color, title, background, onPress}) {
  return(
    <div className="buttBorder"> 
      <button  onPress={onPress} className='button' style={{backgroundColor: background}}>
        <p style={{color}}>{title} </p>
      </button>
    </div>
  );
}
function ButtRow({children, }) {
  return(
    <div className="buttRow">{children}</div>
  )
}

function Lap ({number, interval}) {
  return(
    <div className="lap">
      <p className='lapText'>Lap {number + 1}</p>
      <p className='lapText'>{interval}</p>
    </div>
  )
}

function LapList({lap}) {
  return(
    <div className="lapTable">
      {lap.map((lap, index) => (
        <Lap 
          number={index} 
          key={index}
          interval={lap}
        />
      ))}
      
    </div>
  )
  
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [" 00:35", "00:54", "00:57"  ],
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
    console.log("dsljfdslj");
  }

  render() {
    const { timer , laps } = this.state
    return(
    <div className="container">
      <Timer interval={timer} />
        <ButtRow>
          <Buttons color='#50D166' title="Start" background='#1B361F' onClick={this.state}/> 
          <Buttons color='#f50b0b' title="Stop" background='#1B361F'/>
          <Buttons color='#FFF' title="Reset"  background='#333333' />
          <Buttons color='#FFF' title="Lap"  background='#333333' />
        </ButtRow>
      <LapList lap={laps}/>
    </div>
      )
  }
}