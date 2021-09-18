import axios from 'axios';
import excursionsActions from './excursionsActions';

const getExcursions = () => dispatch => {
  dispatch(excursionsActions.getExcursionsRequest());

  axios
    .get('http://localhost:4000/trips')
    .then(response => dispatch(excursionsActions.getExcursionsSuccess(response.data)))
    .catch(error => dispatch(excursionsActions.getExcursionsError(error)));
};

export default {
  getExcursions,
};
