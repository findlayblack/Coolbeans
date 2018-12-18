import React, { Component } from 'react';
import './App.css';
//import Timer from './Components/Timer';
import Counter from './Components/Counter';
import Seconds from './Components/Seconds';
import Layers from './Components/Layers';
import Chart from './Components/Chart';
import Correlation from './Components/Correlation';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      var1: "",
      var2: "",

      pearson: 0,

      records: {
        var1: [],
        var2: []
      }
    };
  }

  handleValueChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  }

  handleAddVariables = e => {
    e.preventDefault();

    if (!this.state.var1 || !this.state.var2) {
      return;
    }

    this.state.records.var1.push(this.state.var1);
    this.state.records.var2.push(this.state.var2);

    this.setState(() => ({
      var1: "",
      var2: ""
    }));
  }

  handleClearVariables = e => {
    this.setState(() => ({
      var1: "",
      var2: "",

      pearson: 0,

      records: {
        var1: [],
        var2: []
      }
    }));
  }

  render() {
    return (
      <div className="App">
        {/*
       this function is from reactjs.com and I used as inspo for my counter.js
       <div>
          <Timer Timer={ (this.state)}/>
       </div> */}

       <h1 className="App-header"> Layers vs Order Completion Time </h1>

        <div>
          <Counter />
        </div>
        <div style={{height: 10}}>
        </div>
       
        <form class="button">
        <h3>Input Values</h3>
          <div>
            <div>
              <Layers label="Layers" name="var1" value={this.state.var1} onChange={this.handleValueChange} />
              <br />
              <small style={{border:10}}><i>Wearing > 1 Layer</i><code> = 1</code> <br></br> <i>   Wearing no Layers </i><code> = 0</code> </small>
            </div>

            <div>
              <Seconds label="Seconds" name="var2" value={this.state.var2} onChange={this.handleValueChange} />
              <br />
              <small><i>Write the time in seconds.</i></small>
            </div>
          </div>
          <br />
            <div >
              <input class="minus"  type="button" value="Add Values" onClick={this.handleAddVariables} />
            </div>
        </form>
        <br />
        <div style={{height: 10}}>
        </div>
        <div class="button">
        <h3>Entries</h3>
        <div class="container">
          <div class="one">
            <Chart label="Layers" values={this.state.records.var1} />
          </div>
          <div class="two">
            <Chart label="Seconds" values={this.state.records.var2} />
          </div>
        </div>
        </div>
        <br />
        <div style={{height: 10}}>
        </div>
        <div class="button" id="results">
          <Correlation var1={this.state.records.var1} var2={this.state.records.var2} />
        </div>
        <div style={{height: 100}}>
        </div>
      </div>
    );
  }

}

export default App;

