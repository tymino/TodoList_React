const changeInputAction = value => {
  return {
    type: 'CHANGE_INPUT_VALUE',
    payload: value
  }
}
export default changeInputAction;