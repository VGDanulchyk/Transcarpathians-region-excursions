import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addTrek = createAction('treks/add', (title, text, price) => ({
  payload: {
    trek: {
      id: uuidv4(),
      title,
      text,
      price,
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
