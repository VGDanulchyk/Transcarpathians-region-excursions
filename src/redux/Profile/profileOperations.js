import axios from 'axios';
import profileAction from './profileAction';

let en;

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  en = process.env.LOCAL_DB;
} else {
  en = process.env.REMOTE_DB;
}

const getProfileInfo = () => dispatch => {
  dispatch(profileAction.getProfileInfoRequest());

  axios
    .get(`http://${en}`)
    .then(response => dispatch(profileAction.getProfileInfoSuccess(response.data)))
    .catch(error => dispatch(profileAction.getProfileInfoError(error)));
};

export default {
  getProfileInfo,
};
