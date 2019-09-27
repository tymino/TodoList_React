/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { signupLogin, signupPass, signupSubmit, isLoading } from '../../store/actions';

const SignUp = ({
  signupStateLogin,
  signupStatePassword,
  handleLogin,
  handlePassword,
  handleSubmit,
  iLoading,
  isAuth,
  isError
}) => {
  return (
    <div className="auth__container">
      {isAuth ? <Redirect to="/todos" /> : false}
      <form onSubmit={e => handleSubmit(e)}>
        <p className="auth__title">Регистрация!</p>
        {isError !== '' ? <p className="auth__error">{isError}</p> : <p>{null}</p>}
        <label className="auth__label" htmlFor="signup__login">
          <span className="auth__span">Login:</span>
          <input
            id="signup__login"
            className="auth__input"
            name="login"
            type="text"
            value={signupStateLogin}
            onChange={e => handleLogin(e.target.value)}
            required
          />
        </label>
        <label className="auth__label" htmlFor="signup__password">
          <span className="auth__span">Password:</span>
          <input
            id="signup__password"
            className="auth__input"
            type="password"
            name="password"
            value={signupStatePassword}
            onChange={e => handlePassword(e.target.value)}
            required
          />
        </label>
        <label className="auth__label" htmlFor="signup__sabmit">
          <input
            id="signup__sabmit"
            className="auth__submit"
            type="submit"
            value="Зарегистрироваться и войти"
          />
        </label>
      </form>
      {iLoading === false ? (
        <Link className="link" to="/signin">
          Уже есть аккаунт?
        </Link>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  signupStateLogin: state.signup.login,
  signupStatePassword: state.signup.password,
  iLoading: state.isLoading,
  isAuth: state.isAuth,
  isError: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: login => {
      dispatch(signupLogin(login));
    },
    handlePassword: pass => {
      dispatch(signupPass(pass));
    },
    handleSubmit: e => {
      e.preventDefault();

      dispatch(isLoading());
      dispatch(
        signupSubmit({
          login: e.target.login.value,
          password: e.target.password.value
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
