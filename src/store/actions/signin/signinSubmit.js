import axios from 'axios';
import { setToken } from '../../../helpers/token';

import { serverName } from '../../../helpers/globalsVar';


const signinSubmit = signinData => dispatch => {
  axios
    .post(`${serverName}/signin`, signinData)
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