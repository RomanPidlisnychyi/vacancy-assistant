import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions/filterActions';

export const filter = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
