import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import treksActions from './treksActions';

const addTrek = (state, action) => {
  return [...state, action.payload.trek];
};

const removeTrek = (state, action) => {
  return state.filter(trek => trek.id !== action.payload);
};

const items = createReducer([], {
  [treksActions.addTrek]: addTrek,
  [treksActions.removeTrek]: removeTrek,
});

const filter = createReducer('', {
  [treksActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
