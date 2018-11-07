import React, { Component } from 'react';
import calculatePearsonCorrelation from './../Pearson.js';

class Correlation extends Component {
    render() {
        return (
            <div>
                <h2>Correlation:</h2>
                <div>{calculatePearsonCorrelation(this.props.var1, this.props.var2)}</div>
            </div>
        );
    }
}

export default Correlation;