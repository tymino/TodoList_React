import mainState from '../store';

const inputReducer = (state = mainState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload
      };

    default:
      return state;
  }
};

export default inputReducer;
