const signupPass = pass => {
  return {
    type: 'SIGNUP_PASS_CHANGE_INPUT_VALUE',
    payload: pass
  }
}
export default signupPass;