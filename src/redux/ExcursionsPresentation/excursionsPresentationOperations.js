import axios from 'axios';
import excursionsPresentationAction from './excursionsPresentationAction';
import { apiEndpoint } from '../../envConfig';

const getExcursionsPresentation = () => dispatch => {
  dispatch(excursionsPresentationAction.getExcursionsPresentationRequest());

  axios
    .get(`${apiEndpoint}/trips?_limit=3`)
    .then(response =>
      dispatch(excursionsPresentationAction.getExcursionsPresentationSuccess(response.data)),
    )
    .catch(error => dispatch(excursionsPresentationAction.getExcursionsPresentationError(error)));
};

export default getExcursionsPresentation;
