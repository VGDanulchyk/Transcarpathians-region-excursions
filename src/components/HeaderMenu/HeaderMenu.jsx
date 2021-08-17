import React from 'react';
import styles from './HeaderMenu.module.css';

const HeaderMenu = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.stroke}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Downloads</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">Nice staff</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
