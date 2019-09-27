const signinLogin = login => {
  return {
    type: 'SIGNIN_LOGIN_CHANGE_INPUT_VALUE',
    payload: login
  }
}
export default signinLogin;