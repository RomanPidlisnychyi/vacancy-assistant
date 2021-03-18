import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './authActions';

const tokenInLocalStorage = localStorage.getItem('vacancyToken')
  ? JSON.parse(localStorage.getItem('vacancyToken'))
  : null;

const initialUserState = {
  name: null,
  email: null,
};

const initialTokenState = {
  accessToken: null,
  refreshToken: null,
};

const user = createReducer(initialUserState, {
  [authActions.register]: (_, { payload }) => payload.user,
});

const token = createReducer(
  tokenInLocalStorage ? tokenInLocalStorage : initialTokenState,
  {
    [authActions.register]: (_, { payload }) => payload.token,
  }
);

const err = createReducer(null, {
  [authActions.register]: (_, { payload }) => payload,
});
export default combineReducers({
  user,
  token,
  err,
});
