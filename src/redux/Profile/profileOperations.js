import axios from 'axios';
import profileAction from './profileAction';

const getProfileInfo = () => dispatch => {
  dispatch(profileAction.getProfileInfoRequest());

  axios
    .get('http://localhost:4000/profileinfo')
    .then(response => dispatch(profileAction.getProfileInfoSuccess(response.data)))
    .catch(error => dispatch(profileAction.getProfileInfoError(error)));
};

export default {
  getProfileInfo,
};
