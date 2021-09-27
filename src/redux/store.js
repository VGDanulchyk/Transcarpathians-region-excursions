import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './Profile/profileReducer';
import excursionPresentationReducer from './ExcursionsPresentation/excursionsPresentationReducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    // excutsions: excursionPresentationReducer,
  },
  // middleware: [md1, md2],
});

export default store;
