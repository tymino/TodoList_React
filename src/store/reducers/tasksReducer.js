import mainState from '../store';

const tasksReducer = (state = mainState, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload
      };

    case 'ADD_TASK': {
      return {
        inputValue: '',
        tasks: [
          ...state.tasks,
          {
            id: (() =>
              Math.random()
                .toString(36)
                .substr(2, 9))(),
            value: action.payload,
            isDone: false
          }
        ]
      };
    }

    case 'DONE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((elem, index) => {
          if (action.payload === index) {
            return {
              ...elem,
              isDone: true
            };
          }
          return {
            ...elem,
            isDone: false
          };
        })
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((e, i) => action.payload !== i)
      };

    default:
      return state;
  }
};

export default tasksReducer;
