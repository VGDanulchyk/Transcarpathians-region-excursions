import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../../../img/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div>
        <NavLink to="/">
          <img className={styles.img} src={logo} alt="logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Logo;
