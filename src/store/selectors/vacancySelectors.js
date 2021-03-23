import { createSelector } from '@reduxjs/toolkit';
import { transformDate } from '../../utils/transformDate';
import { getFilter } from './filterSelectors';

export const getVacancies = state => state.vacancies;

export const getFiltredVacancies = createSelector(
  getVacancies,
  getFilter,
  (vacancies, filter) =>
    vacancies.filter(vacancy =>
      vacancy.companyName.toLowerCase().includes(filter.toLowerCase())
    )
);

export const getReversedVacancies = createSelector(
  getFiltredVacancies,
  vacancies => [...vacancies].reverse()
);

export const getVacancy = createSelector(
  getVacancies,
  (state, id) => id,
  (vacancies, id) => {
    const vacancy = vacancies.find(vacancy => vacancy._id === id);
    const currentFormatDate = transformDate(vacancy.date);

    return { ...vacancy, date: currentFormatDate };
  }
);
