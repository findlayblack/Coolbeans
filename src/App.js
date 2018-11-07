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

       <h1 className="App-header"> Layers vs Order Time </h1>

        <div>
          <Counter />
        </div>
        <div style={{height: 100}}>
        </div>
        <br />
        <form>
          <div>
            <div>
              <Layers label="Layers" name="var1" value={this.state.var1} onChange={this.handleValueChange} />
              <br />
              <small style={{border:10}}><i>Wearing > 1 Layer</i><code> = 1</code> <i>   Wearing no Layers </i><code> = 0</code> </small>
            </div>

            <div>
              <Seconds label="Seconds" name="var2" value={this.state.var2} onChange={this.handleValueChange} />
              <br />
              <small>Write the time in seconds.</small>
            </div>
          </div>
          <br />
            <div>
              <input style={{ borderWidth: '2.5px' }} type="button" value="Add Values" onClick={this.handleAddVariables} />
            </div>
        </form>
        <br />
        <div style={{height: 100}}>
        </div>
        <h2>Entries</h2>
        <div>
          <div  >
            <Chart label="Layers" values={this.state.records.var1} />
          </div>
          <div >
            <Chart label="Seconds" values={this.state.records.var2} />
          </div>
        </div>
        <br />
        <div id="results">
          <Correlation var1={this.state.records.var1} var2={this.state.records.var2} />
        </div>
        <div style={{height: 100}}>
        </div>
      </div>
    );
  }

}

export default App;
