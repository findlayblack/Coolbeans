import React, { Component } from 'react';
class InputApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
            <h3>---------</h3>
          
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-Input">
              Type Customer Name & Time:
            </label>
            <br></br>
            <input
              id="new-Input"
              onChange={this.handleChange}
              value={this.state.text}
              placeholder="Name: Time"
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>

        <InputList items={this.state.items} />

        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class InputList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
  export default InputApp;