import { createSelector } from '@reduxjs/toolkit';

export const getVacancies = state => {
  const vacancies = [...state.vacancies];
  return vacancies.reverse();
};

export const getVacancy = createSelector(
  getVacancies,
  (state, id) => id,
  (vacancies, id) => vacancies.find(vacancy => vacancy._id === id)
);
