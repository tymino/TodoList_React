import axios from 'axios';
import { getToken } from '../../../helpers/token';

const removeTaskAction = taskID => dispatch => {
  const token = getToken();

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios
    .delete(`http://localhost:5555/${taskID}`)
    .then(response => {
      dispatch({
        type: 'TASK_GET',
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export default removeTaskAction;
