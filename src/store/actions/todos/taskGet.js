import axios from 'axios';
import { getToken } from '../../../helpers/token';

const taskGet = () => dispatch => {
  const token = getToken();

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios
    .get('https://my-react-redux-todos-server.herokuapp.com/')
    .then(response => {
      if (response.data.error === 'Token expired!') {
        return;
      }

      dispatch({
        type: 'TASK_GET',
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export default taskGet;
