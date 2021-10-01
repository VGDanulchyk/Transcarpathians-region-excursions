import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './Profile/profileReducer';
import excursionsPresentationReducer from './ExcursionsPresentation/excursionsPresentationReducer';
import excursionsReducer from './Excursion/excursionsReducer';
import treksReducer from './Treks/treksReducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    excursionsPresentation: excursionsPresentationReducer,
    excursions: excursionsReducer,
    treks: treksReducer,
  },
});

export default store;
