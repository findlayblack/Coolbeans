import React, { Component } from 'react';

class Chart extends Component {
    render() {
        return (
            <div>
                <p>{this.props.label}</p>
                <div dangerouslySetInnerHTML={{__html: this.props.values.join('<br />')}}>
                </div>
            </div>
        );
    }
}

export default Chart;