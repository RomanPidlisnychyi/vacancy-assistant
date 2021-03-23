import { createReducer } from '@reduxjs/toolkit';
import { getStatuses } from '../actions/vacancyActions';

export const statuses = createReducer(null, {
  [getStatuses]: (_, { payload }) => payload,
});
