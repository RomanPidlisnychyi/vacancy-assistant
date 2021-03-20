import { createReducer } from '@reduxjs/toolkit';
import {
  registerReauest,
  registerSuccess,
  registerError,
  loginReauest,
  loginSuccess,
  loginError,
  currentReauest,
  currentSuccess,
  currentError,
} from '../actions/authActions';

const loading = createReducer(false, {
  [registerReauest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginReauest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [currentReauest]: () => true,
  [currentSuccess]: () => false,
  [currentError]: () => false,
});

export default loading;
