/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { inputField, taskAdd, taskClear, logout } from '../../store/actions';

const InputField = ({
  inputValue,
  addTask,
  clearTask,
  handleInput,
  goOff
}) => {
  return (
    <div className="todos__container">
      <div className="todos__header">
        <p className="header__nickname">{`${inputValue.length}/200`}</p>
        <Link className="link" onClick={() => goOff()}>Выход</Link>
      </div>
      <input
        className="todos__input"
        onChange={e => handleInput(e.target.value.replace(/^\s/, '').replace(/\s+/g, ' '))}
        value={inputValue}
        placeholder="Введите задачу"
        type="text"
      />
      <div className="todos__buttons-wrapper">
        <input
          id="btn__add"
          className="todos__button"
          value="Добавить задачу"
          onClick={() => addTask(inputValue)}
          type="button"
        />
        <input
          id="btn__clear"
          className="todos__button"
          value="Очистить"
          onClick={() => clearTask()}
          type="button"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  inputValue: state.inputValue
});

const mapDispatchToProps = dispatch => {
  return {
    addTask: text => {
      if (text !== '') {
        dispatch(taskAdd(text.trim()));
        dispatch(inputField(''));
      }
    },
    clearTask: () => {
        dispatch(taskClear());
    },
    handleInput: value => {
      if (value.length <= 200) {
        dispatch(inputField(value));
      }
    },
    goOff: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
