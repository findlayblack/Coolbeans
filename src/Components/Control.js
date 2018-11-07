import React, { Component } from 'react';
import './../App.css';

import Output from './Output'
import Chart from './Chart'
import Correlation from './Correlation'

class Control extends React.Component {
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
        const {name, value} = e.target;

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
                <form>
                    <Output label="Variable 1" name="var1" value={this.state.var1} onChange={this.handleValueChange} /> <br />
                    <Output label="Variable 2" name="var2" value={this.state.var2} onChange={this.handleValueChange} />

                    <input type="button" value="Add Variables" onClick={this.handleAddVariables} />
                    <input type="button" value="Clear Variables" onClick={this.handleClearVariables} />
                </form>

                <div>
                    <h1>Entries</h1>
                    <Chart label="Variable 1" values={this.state.records.var1} /> <br />
                    <Chart label="Variable 2" values={this.state.records.var2} />
                </div>

                <div id="result">
                    <Correlation var1={this.state.records.var1} var2={this.state.records.var2} />
                </div>
            </div>
        );
    }
}

export default Control;