import React, { Component } from 'react';
import '../App.css';

//import Timer from './Timer';
class Counter extends Component {

    state = {
      startTime: 1,
      currentTime: 1,
      textInput: ''
    }
  
    startTimer = () => {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.interval = setInterval(() => {
        this.setState(prev => {
          if (prev.currentTime === 0) {
            this.stopTimer();
            return { ...prev, currentTime: prev.startTime };
          } else {
            return {
              ...prev,
              currentTime: prev.currentTime + 1
            }
          }
        })
      }, 1000)
    }
  
    stopTimer = () => {
      clearInterval(this.interval);
    }
  
    updateInput = ({ target }) => {
      this.setState(prev => ({ textInput: target.value }));
    }
  
    setStartTime = () => {
      this.stopTimer();
      this.setState(({ textInput }) => ({ startTime: textInput, currentTime: textInput, textInput: '' }));
    }
  
    render() {
      const { currentTime, textInput } = this.state;
      return (
        <div class="button">
         <h3>Timer</h3>
          <div>Seconds: {currentTime}</div>
          <button class="minus" onClick={this.startTimer}>Start timer</button>
          <br></br>
          <div class="button">
            <input placeholder="Enter # above 0" value={textInput} onChange={this.updateInput} />
            <button class="minus" onClick={this.setStartTime}>Set Start time</button>
          </div>
        </div>
      );
    }
  }
  export default Counter ;
