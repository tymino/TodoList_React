import axios from 'axios';
import { setToken } from '../../../helpers/token';

import { serverName } from '../../../helpers/globalsVar';


const signupSubmit = signupData => dispatch => {

  axios
    .post(`${serverName}/signup`, signupData)
    .then(response => {
      dispatch({
        type: 'SIGNUP_SUBMIT',
        payload: response.data
      });
      
      setToken(response.data.token);
    })
    .catch(err => console.log(err));

};

export default signupSubmit;
