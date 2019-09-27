import axios from 'axios';
import { getToken } from '../../../helpers/token';


const taskAdd = taskText => dispatch => {
  const token = getToken();
  
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios
    .post('http://localhost:5555/addtask', {
      text: taskText,
      color: randColor()
    })
    .then(response => {
      dispatch({
        type: 'TASK_GET',
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

const randColor = () => {
  const arr = ['pink', 'yellow', 'orange', 'blue', 'green'];
  const index = Math.floor(Math.random() * 5);
  return arr[index];
};

export default taskAdd;
