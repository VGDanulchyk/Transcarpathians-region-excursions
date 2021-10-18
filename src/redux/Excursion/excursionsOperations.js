import axios from 'axios';
import excursionsAction from './excursionsAction';
import { apiEndpoint } from '../../envConfig';

const getExcursions = () => dispatch => {
  dispatch(excursionsAction.getExcursionsRequest());

  axios
    .get(`${apiEndpoint}/trips`)
    .then(response => dispatch(excursionsAction.getExcursionsSuccess(response.data)))
    .catch(error => dispatch(excursionsAction.getExcursionsError(error)));
};

export default getExcursions;
