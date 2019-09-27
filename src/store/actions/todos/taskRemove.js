import axios from 'axios';
import { getToken } from '../../../helpers/token';

const removeTaskAction = taskID => dispatch => {
  const token = getToken();

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios
    .delete(`https://my-react-redux-todos-server.herokuapp.com/${taskID}`)
    .then(response => {
      dispatch({
        type: 'TASK_GET',
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export default removeTaskAction;
