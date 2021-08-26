import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = props => {
  return (
    <div className={styles.buttonBody}>
      <Link to="/excursions" className={styles.lincStyles}>
        <div className={styles.btn}>
          <span className={styles.noselect}>{props.button.name}</span>
          <div className={styles.circle}></div>
        </div>
      </Link>
    </div>
  );
};

export default Button;
