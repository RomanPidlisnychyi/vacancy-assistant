import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  currentSuccess,
  logoutSuccess,
  registerError,
  loginError,
  currentError,
} from '../actions/authActions';

const initialUserState = {
  name: null,
  email: null,
};

const initialTokensState = {
  access: null,
  refresh: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload.user,
  [currentSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
});

const tokens = createReducer(initialTokensState, {
  [loginSuccess]: (_, { payload }) => payload.tokens,
  [currentSuccess]: (_, { payload }) => payload.tokens,
  [logoutSuccess]: () => initialTokensState,
});

const err = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [registerSuccess]: () => null,
  [loginError]: (_, { payload }) => payload,
  [loginSuccess]: () => null,
  [currentError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  tokens,
  err,
});
