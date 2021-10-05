import React, {Component} from "react";
import moment from "moment"

const data = {
  timer: "00:43,25",
  laps: [213, 234, 235, 3532]
};

function Timer({ interval }) {
  const duration = moment.duration(interval)
  return  <span className='timer'>{ interval}</span>
}

export default class App extends Component {
  render() {
    return(
    <div className="container">
      <Timer interval={data.timer} />
    </div>
      )
  }
}