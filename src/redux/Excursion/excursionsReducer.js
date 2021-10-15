import { createReducer } from '@reduxjs/toolkit';
import excursionsAction from './excursionsAction';

export default createReducer(
  {
    loading: false,
    trips: [],
    filter: '',
  },

  {
    [excursionsAction.getExcursionsRequest]: state => {
      return {
        ...state,
        loading: true,
      };
    },

    [excursionsAction.getExcursionsSuccess]: (state, action) => {
      return {
        ...state,
        trips: action.payload,
        loading: false,
      };
    },

    [excursionsAction.changeFilter]: (state, action) => {
      return {
        ...state,
        filter: action.payload,
        loading: false,
      };
    },
  },
);
