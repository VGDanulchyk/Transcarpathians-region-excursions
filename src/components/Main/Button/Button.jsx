import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = props => {
  return (
    <section className={styles.buttonBody}>
      <Link to={props.button.path} className={styles.lincStyles}>
        <article className={styles.btn}>
          <span className={styles.noselect}>{props.button.name}</span>
          <article className={styles.circle}> </article>
        </article>
      </Link>
    </section>
  );
};

export default Button;
