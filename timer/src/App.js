import React, {Component} from "react";
import ReactDOM from 'react-dom';
import moment from "moment"


function Timer({ interval, style }) {
  const time = moment.duration(interval)
  return (
  <div styles={styles.timerContainer}>
      <div styles={style}>
        {time.minutes()}:{time.seconds()},{time.milliseconds()}
      </div>
    </div>
  )}

function Buttons({ color, title, background, onPress}) {
  return(
    <div className="buttBorder"> 
      <button  onPress={onPress} className='button' styles={{backgroundColor: background}}>
        <p styles={{color}}>{title} </p>
      </button>
    </div>
  );
}
function ButtRow({children, }) {
  return(
    <div className="buttRow">{children}</div>
  )
}

function Lap ({ number, interval}) {
  return(
    <div styles={styles.lap}>
      <div styles={styles.lapText}>Lap {number + 1}</div>
      <Timer styles={styles.lapText} interval={interval}/>
    </div>
  )
}

function LapList({lap, timer}) {
  return(
    <div style={styles.scrollView}>
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
      start: 0,
      now: 0,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
    
  }

  render() {
    const { now, start , laps } = this.state
    return(
    <div style={styles.container}>
      <Timer interval={start} styles={styles.timer} />
        <ButtRow>
          <Buttons color='#50D166' title="Start" background='#1B361F' onPress={console.log('fghfgh')}/> 
          <Buttons color='#f50b0b' title="Stop" background='#1B361F'/>
          <Buttons color='#FFF' title="Reset"  background='#333333' />
          <Buttons color='#FFF' title="Lap"  background='#333333' />
        </ButtRow>
      <LapList lap={laps}/>
    </div>
      )
  }
  
}

const styles = {
  container: {
    display:'flex',
    backgroundColor: '#0D0D0D',
    width: 300,
    height: 400,
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
    

  },
  timerContainer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200',
    width: 110,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
  lapText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  lapTimer: {
    width: 30,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  fastest: {
    color: '#4BC05F',
  },
  slowest: {
    color: '#CC3531',
  },
  timerContainer: {
    flexDirection: 'row',
  }

};