import React, {Component} from 'react';
import './css/InputField.css';


class InputField extends Component {
  render() {
    return (
      <div className="input-field">
        <button
          className ="add-btn"
          onClick={this.props.addTask}
        >
        </button>
        <input
          className="main-input"
          type="text"
          value={this.props.value}
          onChange={this.props.handleInput}
        />
      </div>
    );
  }
}
export default InputField;