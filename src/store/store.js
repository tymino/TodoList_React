const localStorageState = JSON.parse(localStorage.getItem('localTasks'));

const asd = [
  {
    id: '007',
    value: 'Добавить новую задачу',
    isDone: false
  },
  {
    id: '017',
    value: '1',
    isDone: false
  },
  {
    id: '0327',
    value: '2',
    isDone: false
  },
  {
    id: '19541',
    value: '3',
    isDone: false
  },
  {
    id: '484ва',
    value: '4',
    isDone: false
  },
  {
    id: 'й4цы4в',
    value: '5',
    isDone: false
  }
];

const mainState = {
  inputValue: '',
  tasks: (localStorageState === null) ? asd : localStorageState
};

export default mainState;
