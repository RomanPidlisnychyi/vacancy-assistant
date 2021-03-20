import { configureStore } from '@reduxjs/toolkit';
import { authReducer, loadingReducer } from './reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

export default store;
