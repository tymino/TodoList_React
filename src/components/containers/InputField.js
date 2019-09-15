/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import '../../styles/InputField.css';

import React from 'react';
import { connect } from 'react-redux';

import { addTaskAction, changeInputAction } from '../../store/actions';

const InputField = ({ inputValue, addTask, handleInput }) => {
  return (
    <div className="input-field">
      <button className="add-btn" onClick={() => addTask(inputValue)} />
      <input
        className="main-input"
        onChange={e => handleInput(e.target.value.replace(/^\s/, '').replace(/\s+/g, ' '))}
        value={inputValue}
        placeholder="Введите задачу"
        type="text"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  inputValue: state.inputReducer.inputValue
});

const mapDispatchToProps = dispatch => {
  return {
    addTask: text => {
      if (text !== '') {
        dispatch(addTaskAction(text.trim()));
        dispatch(changeInputAction(''));
      }
    },
    handleInput: value => {
      dispatch(changeInputAction(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
