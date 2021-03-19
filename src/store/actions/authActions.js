import { createAction } from '@reduxjs/toolkit';

const registerReauest = createAction('REGISTER_REQUEST');
const registerSuccess = createAction('REGISTER_SUCCESS');
const registerError = createAction('REGISTER_ERROR');

const loginReauest = createAction('LOGIN_REQUEST');
const loginSuccess = createAction('LOGIN_SUCCESS');
const loginError = createAction('LOGIN_ERROR');

const logoutSuccess = createAction('LOGOUT_SUCCESS');

const currentReauest = createAction('CURRENT_REQUEST');
const currentSuccess = createAction('CURRENT_SUCCESS');
const currentError = createAction('CURRENT_ERROR');

const authActions = {
  registerReauest,
  registerSuccess,
  registerError,
  loginReauest,
  loginSuccess,
  loginError,
  logoutSuccess,
  currentReauest,
  currentSuccess,
  currentError,
};

export default authActions;
