import { createAction } from '@reduxjs/toolkit';

const getExcursionsRequest = createAction('excursions/getRequest');
const getExcursionsSuccess = createAction('excursions/getSuccess');
const getExcursionsError = createAction('excursions/getError');

const changeFilter = createAction('excursions/changeFilter');

export default {
  getExcursionsRequest,
  getExcursionsSuccess,
  getExcursionsError,
  changeFilter,
};
