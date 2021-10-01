import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addTrek = createAction('treks/add', text => ({
  payload: {
    trek: {
      id: uuidv4(),
      text,
    },
  },
}));

const removeTrek = createAction('treks/remove');
const changeFilter = createAction('treks/changeFilter');

export default {
  addTrek,
  removeTrek,
  changeFilter,
};
