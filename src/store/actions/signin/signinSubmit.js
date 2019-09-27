import axios from 'axios';
import { setToken } from '../../../helpers/token';


const signinSubmit = signinData => dispatch => {
  axios
    .post('http://localhost:5555/signin', signinData)
    .then(response => {
      dispatch({
        type: 'SIGNIN_SUBMIT',
        payload: response.data
      });

      setToken(response.data.token);
    })
    .catch(err => console.log(err));
}
export default signinSubmit;