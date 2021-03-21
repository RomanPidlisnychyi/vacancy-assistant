import {
  createVacancyRequest,
  createVacancySuccess,
  createVacancyError,
  updateVacancyRequest,
  updateVacancySuccess,
  updateVacancyError,
  deleteVacancyRequest,
  deleteVacancySuccess,
  deleteVacancyError,
} from '../actions/vacancyActions';
import { createVacancy } from '../../utils/apiUtils';

export const onCreateVacancy = vacancy => async dispatch => {
  dispatch(createVacancyRequest());

  const payload = await createVacancy(vacancy);

  console.log('payload', payload);

  if (payload._id) {
    dispatch(createVacancySuccess(payload));
    return payload;
  }

  dispatch(createVacancyError());
};
