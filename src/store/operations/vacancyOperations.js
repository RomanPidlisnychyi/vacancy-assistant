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
import { create } from '../../utils/apiUtils';

export const onCreate = vacancy => async dispatch => {
  dispatch(createVacancyRequest());

  const payload = await create(vacancy);

  if (payload._id) {
    dispatch(createVacancySuccess(payload));
    return payload;
  }

  dispatch(createVacancyError());
};
