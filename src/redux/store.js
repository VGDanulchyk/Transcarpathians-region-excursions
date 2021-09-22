// import { configureStore } from '@reduxjs/toolkit';
// import excursionsReducer from './excursionsReducer';
//
// // const defaultMiddleware = getDefaultMiddleware();
//
// const store = configureStore({
//   reducer: {
//     excursions: excursionsReducer,
//   },
//   // middleware: [...defaultMiddleware],
// });
//
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './Profile/profileReducer';
import excursionPresentationReducer from './ExcursionPresentation/excursionPresentationReducer';

// const md1 = store => next => action => {
//   console.log('Hello from MD1');
//
//   next(action);
// };
//
// const md2 = store => next => action => {
//   console.log('Hello from MD2');
//
//   next(action);
// };

const store = configureStore({
  reducer: {
    profileInfo: profileReducer,
    // excutsions: excursionPresentationReducer,
  },
  // middleware: [md1, md2],
});

export default store;
