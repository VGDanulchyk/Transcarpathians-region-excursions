import axios from 'axios';
import excursionsPresentationAction from './excursionsPresentationAction';

const getExcursionsPresentation = () => dispatch => {
  dispatch(excursionsPresentationAction.getExcursionsPresentationRequest());

  axios
    .get('http://localhost:4000/trips?_limit=3')
    .then(response =>
      dispatch(excursionsPresentationAction.getExcursionsPresentationSuccess(response.data)),
    )
    .catch(error => dispatch(excursionsPresentationAction.getExcursionsPresentationError(error)));
};

export default getExcursionsPresentation;
