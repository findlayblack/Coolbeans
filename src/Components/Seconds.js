
import React, { Component } from 'react';


class Seconds extends Component {

    handleValueChange = e => {
        this.props.onChange(e);
    }

    render() {
        return (
            //gets the elapsed # of seconds taken for a customer after recieving the drink that they ordered
            <label>
                {this.props.label}:
                <input style={{width: 200}} type="number" min= "1"  value={this.props.value} name={this.props.name} onChange={this.handleValueChange} />
            </label>

        );
    }
}

export default Seconds;