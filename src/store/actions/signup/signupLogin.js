const signupLogin = login => {
  return {
    type: 'SIGNUP_LOGIN_CHANGE_INPUT_VALUE',
    payload: login
  }
}
export default signupLogin;