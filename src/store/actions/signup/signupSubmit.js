import axios from 'axios';
import { setToken } from '../../../helpers/token';

const signupSubmit = signupData => dispatch => {

  axios
    .post('http://localhost:5555/signup', signupData)
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
