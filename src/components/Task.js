import React, {Component} from 'react';


class Task extends Component {
  componentDidUpdate() {
    console.log(this.props.tasks);
  }
  componentWillUnmount() {
    console.log('Delete ' + this);
  }
  render() {
    return (
      <div>
        <p style={myStyle}>{this.props.index}</p>
        <p style={myStyle}>{this.props.task.value}</p>
        <button
          onClick={this.props.onDone}
        >
          Done
        </button>
        <button
          onClick={this.props.onDelete}
        >
          X
        </button>
      </div>
    );
  }
}
export default Task;

const myStyle = {
  display: "inline",
  margin: 3
}