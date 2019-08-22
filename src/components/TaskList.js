import React, {Component} from 'react';
import Task from './Task';


class TaskList extends Component {
  render() {
    return (
      <div className="tasklist">
        {this.props.tasks.map((task, index) => {
          return (
            <Task
              key={task.id}
              task={task}
              index={index + 1}
              onDelete={() => this.props.removeTask(index)}
              onDone={() => this.props.isDoneTask(index)}
            />
          );
        })}
      </div>
    );
  }
}
export default TaskList;