import { createAction } from '@reduxjs/toolkit';

const register = createAction('AUTH_REGISTER');
const login = createAction('AUTH_LOGIN');
const logout = createAction('AUTH_LOGOUT');

export default {
  register,
  login,
  logout,
};
