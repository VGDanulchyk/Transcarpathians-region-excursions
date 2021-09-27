import axios from 'axios';
import excursionsAction from './excursionsAction';

const getExcursions = () => dispatch => {
  dispatch(excursionsAction.getExcursionsRequest());

  axios
    .get('http://localhost:4000/trips')
    .then(response => dispatch(excursionsAction.getExcursionsSuccess(response.data)))
    .catch(error => dispatch(excursionsAction.getExcursionsError(error)));
};

export default {
  getExcursions,
};
