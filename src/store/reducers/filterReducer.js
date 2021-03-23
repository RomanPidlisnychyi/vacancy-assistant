import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions/filterActions';
import { currentError, refreshError } from '../actions/authActions';

export const filter = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
  [currentError]: () => '',
  [refreshError]: () => '',
});
