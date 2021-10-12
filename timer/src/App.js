import React, {Component} from "react";
import ReactDOM from 'react-dom';
import moment from "moment"


const DATA ={
  timer: 234234,
  laps: [234234, 234324234, 2432432234, 23423,]
}

function Timer({interval}) {
  return <h3>{interval}</h3>
}
  export default class App extends Component {
    render() {
      return (
        <div style={styles.container}>
          <Timer/>
        </div>
      );
    }
  }

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#020202',
      alignItems: 'center',
      
    },
  };