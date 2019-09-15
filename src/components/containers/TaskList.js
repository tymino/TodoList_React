import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Task from '../Task';

import { getTasksAction, doneTaskAction, removeTaskAction } from '../../store/actions';

const TaskList = ({ tasks, doneTask, removeTask }) => {
  useEffect(() => 
    localStorage.setItem('localTasks', JSON.stringify(tasks))
  );

  return (
    <div className="tasklist">
      {tasks.map((task, index) => {
        return (
          <Task
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            task={task}
            index={index}
            doneTask={() => doneTask(index)}
            removeTask={() => removeTask(index)}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => {
      dispatch(getTasksAction());
    },
    doneTask: index => {
      dispatch(doneTaskAction(index));
    },
    removeTask: index => {
      dispatch(removeTaskAction(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
