import React from 'react';
import styles from './Logo.module.css';
import logo from '../../img/logo.png';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
