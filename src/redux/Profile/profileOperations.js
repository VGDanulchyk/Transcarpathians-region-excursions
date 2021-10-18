import axios from 'axios';
import profileAction from './profileAction';
import { apiEndpoint } from '../../envConfig';

const getProfileInfo = () => dispatch => {
  dispatch(profileAction.getProfileInfoRequest());

  axios
    .get(`${apiEndpoint}/profileinfo`)
    .then(response => dispatch(profileAction.getProfileInfoSuccess(response.data)))
    .catch(error => dispatch(profileAction.getProfileInfoError(error)));
};

export default {
  getProfileInfo,
};
