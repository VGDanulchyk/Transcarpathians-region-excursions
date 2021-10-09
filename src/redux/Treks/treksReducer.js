import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import treksActions from './treksActions';

const addTrek = (state, action) => {
  return [...state, action.payload];
};

const removeTrek = (state, action) => {
  return state.filter(trek => trek.id !== action.payload);
};

const items = createReducer([], {
  [treksActions.getTreksSuccess]: (state, action) => action.payload,
  [treksActions.addTrekSuccess]: addTrek,
  [treksActions.removeTrekSuccess]: removeTrek,
});

const filter = createReducer('', {
  [treksActions.changeFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [treksActions.getTreksRequest]: () => true,
  [treksActions.getTreksSuccess]: () => false,
  [treksActions.getTreksError]: () => false,
  [treksActions.addTrekRequest]: () => true,
  [treksActions.addTrekSuccess]: () => false,
  [treksActions.addTrekError]: () => false,
  [treksActions.removeTrekRequest]: () => true,
  [treksActions.removeTrekSuccess]: () => false,
  [treksActions.removeTrekError]: () => false,
});

export default combineReducers({
  items,
  loading,
  filter,
});
