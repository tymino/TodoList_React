import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Task from '../Task';

import { taskGet, taskDone, taskRemove } from '../../store/actions';

const TaskList = ({ tasks, isAuth, getTasks, doneTask, removeTask }) => {
  useEffect(() => getTasks(), []);

  return (
    <div className="tasklist__container">
      {isAuth === true ? (
        tasks.map((task, index) => {
          return (
            <Task
              key={task._id}
              task={task}
              index={index}
              doneTask={() => doneTask(task)}
              removeTask={() => removeTask(task._id)}
            />
          );
        })
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
  token: state.token,
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => {
      dispatch(taskGet());
    },
    doneTask: task => {
      dispatch(taskDone(task));
    },
    removeTask: taskID => {
      dispatch(taskRemove(taskID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
