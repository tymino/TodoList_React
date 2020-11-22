import axios from 'axios';
import { getToken } from '../../../helpers/token';

import { serverName } from '../../../helpers/globalsVar';


const removeTaskAction = taskID => dispatch => {
  const token = getToken();

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  axios.delete(`${serverName}/${taskID}`)
    .then(response => {
      dispatch({
        type: 'TASK_GET',
        payload: response.data
      });
    }).catch(err => console.log(err));
};

export default removeTaskAction;