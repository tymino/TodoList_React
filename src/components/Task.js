import React, {Component} from 'react';
import './css/Task.css';


class Task extends Component {
  render() {
    return (
      <div className="task">
        <div className="wrapper">
          <p className="index">{`${this.props.index}/20`}</p>
          <button
            className={(this.props.task.isDone === true) ? 'btn-done btn-done-complete' : 'btn-done'}
            onClick={this.props.onDone}
          >
          </button>
        </div>
        <p className={(this.props.task.isDone === true) ? 'value task-complete' : 'value'}>{this.props.task.value}</p>
        <button
          className={(this.props.task.isDone === true) ? 'btn-delete btn-delete-complete' : 'btn-delete'}
          onClick={this.props.onDelete}
        >
        </button>
      </div>
    );
  }
}
export default Task;