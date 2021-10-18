import axios from 'axios';
import treksActions from './treksActions';
import trekImg from '../../img/MainImg/trekimg.jpg';

const addTrek =
  ({ title, text }) =>
  dispatch => {
    dispatch(treksActions.addTrekRequest());

    axios
      .post(`${apiEndpoint}/treks`, { title, text, img: trekImg })
      .then(response => dispatch(treksActions.addTrekSuccess(response.data)))
      .catch(error => dispatch(treksActions.addTrekError(error)));
  };

const getTreks = () => dispatch => {
  dispatch(treksActions.getTreksRequest());

  axios
    .get(`${apiEndpoint}/treks`)
    .then(({ data }) => dispatch(treksActions.getTreksSuccess(data)))
    .catch(error => dispatch(treksActions.getTreksError(error)));
};

const removeTrek = id => dispatch => {
  dispatch(treksActions.removeTrekRequest());

  axios
    .delete(`${apiEndpoint}/treks/${id}`)
    .then(() => dispatch(treksActions.removeTrekSuccess(id)))
    .catch(error => dispatch(treksActions.removeTrekError(error)));
};

export default {
  addTrek,
  getTreks,
  removeTrek,
};
