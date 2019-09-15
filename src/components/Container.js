import '../styles/Container.css';

import React from 'react';
import InputField from './containers/InputField';
import TaskList from './containers/TaskList';

const Container = () => (
  <div className="container">
    <InputField />
    <TaskList />
  </div>
);

export default Container;
