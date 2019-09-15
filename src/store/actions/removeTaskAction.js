const removeTaskAction = index => {
  return {
    type: 'REMOVE_TASK',
    payload: index
  }
}
export default removeTaskAction;
