
import React, { Component } from 'react';

class Layers extends Component {

    handleValueChange = e => {
        this.props.onChange(e);
    }

    render() {
        return (
            //Gets values from the text input of the user
            //Values are acceptable as 1 and 0 which corresponds to layers and no layers
            <label>
                {this.props.label}:
                <input style={{width: 200}} type="number" min="0" max="1" value={this.props.value} name={this.props.name} onChange={this.handleValueChange} />
            </label>

        );
    }
}

export default Layers;