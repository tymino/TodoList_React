import axios from 'axios';
import { getToken } from '../../../helpers/token';

const doneTaskAction = task => dispatch => {
  const token = getToken();
  
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios
    .put(`https://my-react-redux-todos-server.herokuapp.com/${task._id}`, { ...task, isEnd: !task.isEnd })
    .then(response => {
      dispatch({
        type: 'TASK_DONE',
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
export default doneTaskAction;
