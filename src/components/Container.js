import React from 'react';
//import './App.css';

import InputField from './InputField';
import TaskList from './TaskList';


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.isDoneTask = this.isDoneTask.bind(this);
    
    this.state = {
      value: '',
      tasks: [
        {
          id: '0adsda',
          value: 'Купить хлеба',
          isDone: false
        }
      ],
    };
  }

  addTask() {
    if (!this.state.value) { return; }

    const newListTasks = this.state.tasks;
    this.setState({
      tasks: newListTasks.concat([
        {
          id: this.state.value.toString(),
          value: this.state.value.toString(),
          isDone: false
        }
      ]),
      value: '',
    });
  }
  removeTask(index) {
    let localList = this.state.tasks.slice();
    localList.splice(index, 1);
    this.setState({
      tasks: localList
    });
  }
  isDoneTask(index) {
    let localList = this.state.tasks.slice();
    localList[index].isDone = true;

    this.setState({
      tasks: localList
    });
  }

  handleInput(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <InputField
          value={this.state.value}
          handleInput={this.handleInput}
          addTask={this.addTask}
        />
        <TaskList
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          isDoneTask={this.isDoneTask}
        />
      </div>
    );
  }
}
export default Container;