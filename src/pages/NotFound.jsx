import React from 'react';
import notFound from '../../src/img/NotFound.png';
import { Link } from 'react-router-dom';
import '../App.scss';
import Button from '../components/Main/Button/Button';

const NotFound = () => {
  return (
    <section className="notFoundContainer">
      <img src={notFound} alt="Not found photo" className="notFoundImg" />
      <h3 className="notFoundText">
        Здається ви заблукали, щоб повернутися, нитисніть
        <Link to="/" className="notFoundLink">
          <Button button={{ name: 'На головну сторінку', path: '/' }} />
        </Link>
      </h3>
    </section>
  );
};

export default NotFound;
