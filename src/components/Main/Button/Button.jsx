import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = props => {
  return (
    <section className={styles.buttonBody}>
      <Link to={props.button.path} className={styles.lincStyles}>
        <button className={`${styles.btn} ${styles.third}`}>{props.button.name}</button>
      </Link>
    </section>
  );
};

export default Button;
