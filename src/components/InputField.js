import React, {Component} from 'react';


class InputField extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.handleInput}
        />
        <button
          className ="add-btn"
          onClick={this.props.addTask}
        >
          +
        </button>
      </div>
    );
  }
}
export default InputField;