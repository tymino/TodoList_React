export const doneTaskAction = index => {
  return {
    type: 'DONE_TASK',
    payload: index
  }
}
export default doneTaskAction;
