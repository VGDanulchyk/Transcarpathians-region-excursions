import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import excursionsReducer from './excursionsReducer';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    excursions: excursionsReducer,
  },
  middleware: [...defaultMiddleware],
});

export default store;
