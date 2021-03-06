import { createReducer } from '@reduxjs/toolkit';
import excursionsPresentationAction from './excursionsPresentationAction';

export default createReducer(
  {
    loading: false,
    trips: [],
  },
  {
    [excursionsPresentationAction.getExcursionsPresentationRequest]: state => {
      return {
        ...state,
        loading: true,
      };
    },
    [excursionsPresentationAction.getExcursionsPresentationSuccess]: (state, action) => {
      return {
        ...state,
        trips: action.payload,
        loading: false,
      };
    },
  },
);
