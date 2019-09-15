const addTaskAction = text => {
  return {
    type: 'ADD_TASK',
    payload: text
  }
}
export default addTaskAction;
