import { configureStore } from '@reduxjs/toolkit';
import { authReducer, loadingReducer } from './reducers';
import { vacancies } from './reducers/vacancyReducer';
import { filter } from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    vacancies,
    filter,
  },
});

export default store;
