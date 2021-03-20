import { createAction } from '@reduxjs/toolkit';

export const registerReauest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerError = createAction('REGISTER_ERROR');

export const loginReauest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');

export const logoutSuccess = createAction('LOGOUT_SUCCESS');

export const currentReauest = createAction('CURRENT_REQUEST');
export const currentSuccess = createAction('CURRENT_SUCCESS');
export const currentError = createAction('CURRENT_ERROR');
