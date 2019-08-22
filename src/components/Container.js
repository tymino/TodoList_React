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
      tasks: JSON.parse(localStorage.getItem('todo')) || [{
          id: '007',
          value: 'Добавить новую задачу',
          isDone: false
      }]
    };
  }
  // Update Local Storage
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('todo', JSON.stringify(this.state.tasks));
  }

  addTask() {
    // Пустая ли строка
    if (!this.state.value) { return; }

    const newListTasks = this.state.tasks;
    this.setState({
      tasks: newListTasks.concat([
        {
          id: (() => Math.random().toString(36).substr(2, 9))(),
          value: this.state.value.trim(),
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
    let locValue = e.target.value.replace(/^\s/, '').replace(/\s+/g, ' ');

    this.setState({
      value: locValue
    });
  }

  render() {
    console.log('Container');
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