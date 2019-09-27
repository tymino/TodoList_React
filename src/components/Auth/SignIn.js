import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { signinLogin, signinPass, signinSubmit, isLoading } from '../../store/actions';

const SignIn = ({
  signinStateLogin,
  signinStatePassword,
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
        <p className="auth__title">Вход!</p>
        {isError !== '' ? <p className="auth__error">{isError}</p> : <span>{null}</span>}
        <label className="auth__label" htmlFor="signin__login">
          <span className="auth__span">Login:</span>
          <input
            id="signin__login"
            className="auth__input"
            name="login"
            type="text"
            value={signinStateLogin}
            onChange={e => handleLogin(e.target.value)}
            required
          />
        </label>
        <label className="auth__label" htmlFor="signin__password">
          <span className="auth__span">Password:</span>
          <input
            id="signin__password"
            className="auth__input"
            type="password"
            name="password"
            value={signinStatePassword}
            onChange={e => handlePassword(e.target.value)}
            required
          />
        </label>
        <label className="auth__label" htmlFor="signin__sabmit">
          <input
            id="signin__sabmit"
            className="auth__submit"
            type="submit"
            value="Войти"
          />
        </label>
      </form>
      {iLoading === false ?
        <Link className="link" to="/signup">Создать аккаунт</Link> :
        <div>Loading...</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  signinStateLogin: state.signin.login,
  signinStatePassword: state.signin.password,
  iLoading: state.isLoading,
  isAuth: state.isAuth,
  isError: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: login => {
      dispatch(signinLogin(login));
    },
    handlePassword: pass => {
      dispatch(signinPass(pass));
    },
    handleSubmit: e => {
      e.preventDefault();

      dispatch(isLoading());
      dispatch(
        signinSubmit({
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
)(SignIn);
