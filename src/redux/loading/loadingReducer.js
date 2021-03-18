import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';

const loading = createReducer(false, {
  [authActions.login]: () => true,
});

export default loading;
