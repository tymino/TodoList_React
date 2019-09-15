/* eslint-disable jsx-a11y/control-has-associated-label */
import '../styles/Task.css';

import React from 'react';

const Task = ({ task, doneTask, removeTask, index }) => {
  return (
    <div className="task">
      <div className="wrapper">
        <p className="index">{`${index + 1}/20`}</p>
        <button
          className={task.isDone === true ? 'btn-done btn-done-complete' : 'btn-done'}
          onClick={doneTask}
          type="button"
        />
      </div>
      <p className={task.isDone === true ? 'value task-complete' : 'value'}>{task.value}</p>
      <button
        className={task.isDone === true ? 'btn-delete btn-delete-complete' : 'btn-delete'}
        onClick={removeTask}
        type="button"
      />
    </div>
  );
};

export default Task;
