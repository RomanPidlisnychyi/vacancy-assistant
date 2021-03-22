import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  currentRequest,
  currentSuccess,
  currentError,
  refreshRequest,
  refreshSuccess,
  refreshError,
} from '../actions/authActions';
import {
  createVacancyRequest,
  createVacancySuccess,
  createVacancyError,
} from '../actions/vacancyActions';

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [currentRequest]: () => true,
  [currentSuccess]: () => false,
  [currentError]: () => false,
  [refreshRequest]: () => true,
  [refreshSuccess]: () => false,
  [refreshError]: () => false,
  [createVacancyRequest]: () => true,
  [createVacancySuccess]: () => false,
  [createVacancyError]: () => false,
});

export default loading;
