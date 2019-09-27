/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Task = ({ task, doneTask, removeTask}) => {
  return (
    <div className={task.isEnd !== true ? `task__container ${task.color}Color` : 'task__container greyLightenColor'}>
      <div className="task__header-wrapper">
        <div className="wrapper__btn--done">
          <input
            className={task.isEnd === true ?
              "task__btn--done complete" :
              "task__btn--done"}
            onClick={doneTask}
            type="button"
          />
          {task.isEnd === true ?
            <p className="task__complete">Выполнено!</p> :
            <p>{null}</p>}
        </div>
        <input
          className="task__btn--delete"
          onClick={removeTask}
          type="button"
        />
      </div>
      <p className={task.isEnd === true ? 'task__text' : ''}>{task.text}</p>
    </div>
  );
};

export default Task;
