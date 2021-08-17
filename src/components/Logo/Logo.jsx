import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.logo}
          src="https://cdn.pixabay.com/photo/2021/07/29/13/42/cat-6507259_960_720.jpg"
          alt="dfsdfsfd"
        />
      </div>
      <h1>Some logo</h1>
    </div>
  );
};

export default Logo;
