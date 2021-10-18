import axios from 'axios';
import treksActions from './treksActions';
import trekImg from '../../img/MainImg/trekimg.jpg';

const addTrek =
  ({ title, text }) =>
  dispatch => {
    dispatch(treksActions.addTrekRequest());

    axios
      .post('http://localhost:4000/treks', { title, text, img: trekImg })
      .then(response => dispatch(treksActions.addTrekSuccess(response.data)))
      .catch(error => dispatch(treksActions.addTrekError(error)));
  };

const getTreks = () => dispatch => {
  dispatch(treksActions.getTreksRequest());

  axios
    .get('http://localhost:4000/treks')
    .then(({ data }) => dispatch(treksActions.getTreksSuccess(data)))
    .catch(error => dispatch(treksActions.getTreksError(error)));
};

const removeTrek = id => dispatch => {
  dispatch(treksActions.removeTrekRequest());

  axios
    .delete(`http://localhost:4000/treks/${id}`)
    .then(() => dispatch(treksActions.removeTrekSuccess(id)))
    .catch(error => dispatch(treksActions.removeTrekError(error)));
};

export default {
  addTrek,
  getTreks,
  removeTrek,
};
