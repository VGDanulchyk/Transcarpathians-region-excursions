import React from 'react';
import styles from './Button.module.scss';

const Button = props => {
  return (
    <div className={styles.buttonBody}>
      <div className={styles.btn}>
        <span className={styles.noselect}>{props.button.name}</span>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Button;
