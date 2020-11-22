import axios from 'axios';
import { getToken } from '../../../helpers/token';

import { serverName } from '../../../helpers/globalsVar';


const doneTaskAction = task => dispatch => {
  const token = getToken();
  
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.put(
    `${serverName}/${task._id}`,
    { ...task, isEnd: !task.isEnd }
  ).then(response => {
    dispatch({
      type: 'TASK_DONE',
      payload: response.data
    });
  }).catch(err => console.log(err));
};
export default doneTaskAction;
