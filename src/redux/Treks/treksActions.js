import { createAction } from '@reduxjs/toolkit';

const addTrekRequest = createAction('treks/addRequest');
const addTrekSuccess = createAction('treks/addSuccess');
const addTrekError = createAction('treks/addError');

const getTreksRequest = createAction('treks/getRequest');
const getTreksSuccess = createAction('treks/getSuccess');
const getTreksError = createAction('treks/getError');

const removeTrekRequest = createAction('treks/removeRequest');
const removeTrekSuccess = createAction('treks/removeSuccess');
const removeTrekError = createAction('treks/removeError');

const removeTrek = createAction('treks/remove');
const changeFilter = createAction('treks/changeFilter');

export default {
  addTrekRequest,
  addTrekSuccess,
  addTrekError,
  getTreksRequest,
  getTreksSuccess,
  getTreksError,
  removeTrekRequest,
  removeTrekSuccess,
  removeTrekError,
  removeTrek,
  changeFilter,
};
