import { createAction } from '@reduxjs/toolkit';

const getExcursionsPresentationRequest = createAction('excursionsPresentation/getRequest');
const getExcursionsPresentationSuccess = createAction('excursionsPresentation/getSuccess');
const getExcursionsPresentationError = createAction('excursionsPresentation/getError');

export default {
  getExcursionsPresentationRequest,
  getExcursionsPresentationSuccess,
  getExcursionsPresentationError,
};
