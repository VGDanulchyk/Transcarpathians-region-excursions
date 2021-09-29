import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './Profile/profileReducer';
import excursionsPresentationReducer from './ExcursionsPresentation/excursionsPresentationReducer';
import excursionsReducer from './Excursion/excursionsReducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    excursionsPresentation: excursionsPresentationReducer,
    excursions: excursionsReducer,
  },
});

export default store;
