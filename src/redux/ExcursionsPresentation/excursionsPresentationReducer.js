import { createReducer } from '@reduxjs/toolkit';
import excursionsPresentationAction from './excursionsPresentationAction';

export default createReducer(
  {},
  {
    [excursionsPresentationAction.getExcursionsPresentationSuccess]: (state, action) => {
      return {
        ...state,
      };
    },
  },
);
