import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../actions';

const initialUserState = {
  name: null,
  email: null,
};

const initialTokensState = {
  access: null,
  refresh: null,
};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.currentSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
});

const tokens = createReducer(initialTokensState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.tokens,
  [authActions.currentSuccess]: (_, { payload }) => payload.tokens,
  [authActions.logoutSuccess]: () => initialTokensState,
});

const err = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerSuccess]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginSuccess]: () => null,
});

export default combineReducers({
  user,
  tokens,
  err,
});
