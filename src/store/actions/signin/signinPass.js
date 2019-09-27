const signinPass = pass => {
  return {
    type: 'SIGNIN_PASS_CHANGE_INPUT_VALUE',
    payload: pass
  }
}
export default signinPass;