import { createReducer } from '@reduxjs/toolkit';
import {
  getAllVacancies,
  createVacancySuccess,
  updateVacancySuccess,
  deleteVacancySuccess,
} from '../actions/vacancyActions';

const updateVacancy = (state, { payload }) =>
  state.map(vacancy => {
    if (vacancy._id !== payload._id) {
      return payload;
    }

    return vacancy;
  });

const deleteVacancy = (state, { payload }) =>
  state.filter(vacancy => vacancy._id !== payload);

export const vacancies = createReducer([], {
  [getAllVacancies]: (_, { payload }) => payload,
  [createVacancySuccess]: (state, { payload }) => ({ ...state, payload }),
  [updateVacancySuccess]: updateVacancy,
  [deleteVacancySuccess]: deleteVacancy,
});
