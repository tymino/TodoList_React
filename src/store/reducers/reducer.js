import mainState from '../store';

const reducer = (state = mainState, action) => {
  switch (action.type) {
    // Sign In
    case 'SIGNIN_LOGIN_CHANGE_INPUT_VALUE':
      return {
        ...state,
        signin: {
          ...state.signin,
          login: action.payload
        },
        error: ''
      };

    case 'SIGNIN_PASS_CHANGE_INPUT_VALUE':
      return {
        ...state,
        signin: {
          ...state.signin,
          password: action.payload
        },
        error: ''
      };

    case 'SIGNIN_SUBMIT':
      return {
        ...state,
        signin: {
          login: '',
          password: ''
        },
        isLoading: false,
        isAuth: action.payload.isAuth,
        error: action.payload.error,
        token: action.payload.token
      };

    case 'IS_LOADING':
      return {
        ...state,
        signin: {
          login: '',
          password: ''
        },
        isLoading: true
      };

    // Sign Up
    case 'SIGNUP_LOGIN_CHANGE_INPUT_VALUE':
      return {
        ...state,
        signup: {
          ...state.signup,
          login: action.payload
        },
        error: ''
      };

    case 'SIGNUP_PASS_CHANGE_INPUT_VALUE':
      return {
        ...state,
        signup: {
          ...state.signup,
          password: action.payload
        },
        error: ''
      };

    case 'SIGNUP_SUBMIT':
      return {
        ...state,
        signup: {
          login: '',
          password: ''
        },
        isLoading: false,
        isAuth: action.payload.isAuth,
        error: action.payload.error,
        token: action.payload.token
      };

    case 'CHANGE_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload
      };

    case 'TASK_GET':
      return {
        ...state,
        tasks: action.payload,
        isAuth: true
      };

    case 'TASK_DONE':
      return {
        ...state,
        tasks: state.tasks.map(elem => {
          if (action.payload._id === elem._id) {
            return {
              ...action.payload
            };
          }
          return {
            ...elem
          };
        })
      };

    case 'SET_AUTH_FALSE':
      return {
        ...state,
        isAuth: action.payload
      };

    case 'CLEAR_DATA':
      return {
        ...state,
        inputValue: ''
      }

    case 'LOG_OUT':
      return {
        ...state,
        inputValue: '',
        token: '',
        isAuth: false
      }

    default:
      return state;
  }
};

export default reducer;
