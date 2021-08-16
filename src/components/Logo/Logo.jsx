import React from 'react';
import styles from './Logo.module.css';

const Logo = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src="../../img/logo.png" alt="dfsdfsfd" />
      </div>
      <h1>Some logo</h1>
    </div>
  );
};

export default Logo;
