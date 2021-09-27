import { createReducer } from '@reduxjs/toolkit';
import profileAction from './profileAction';

export default createReducer(
  {},
  {
    [profileAction.getProfileInfoSuccess]: (state, action) => {
      return {
        ...state,
        title: action.payload.title,
        text: action.payload.text,
        loading: false,
      };
    },
    [profileAction.getProfileInfoRequest]: state => {
      return {
        ...state,
        loading: true,
      };
    },
  },
);
