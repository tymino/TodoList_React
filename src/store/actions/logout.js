import { removeToken } from '../../helpers/token';

const logout = () => {
  removeToken();
  return {
    type: 'LOG_OUT'
  }
}

export default logout;
