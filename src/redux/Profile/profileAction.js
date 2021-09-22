import { createAction } from '@reduxjs/toolkit';

const getProfileInfoRequest = createAction('profile/getRequest');
const getProfileInfoSuccess = createAction('profile/getSuccess');
const getProfileInfoError = createAction('profile/getError');

export default {
  getProfileInfoRequest,
  getProfileInfoSuccess,
  getProfileInfoError,
};
