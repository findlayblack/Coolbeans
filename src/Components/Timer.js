import React, { Component } from 'react';
class Timer extends Component {
  constructor(props) {
    super(props);
    // set state to zero so counter will also begin from zero
    this.state = { seconds: 0 };
  }
// create a count funtion using the pre-exsting tick function
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
//begin loading in the data, woohoo!
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
//clears the interval for the tick and seconds
  componentWillUnmount() {
    clearInterval(this.interval);}
  //renders it in an intuative UI, yeehaw!
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
   
  
  }
}

  

export default Timer;