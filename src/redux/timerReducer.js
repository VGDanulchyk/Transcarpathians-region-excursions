import { combineReducers } from 'redux';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'TIMER_INCREMENT':
      return state + payload.value;

    case 'TIMER_DECREMENT':
      return state - payload.value;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => {
  return state;
};

export default combineReducers({ value: valueReducer, step: stepReducer });
