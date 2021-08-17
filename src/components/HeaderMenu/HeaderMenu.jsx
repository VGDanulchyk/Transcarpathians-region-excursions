import React from 'react';

import styles from './HeaderMenu.module.css';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.stroke}>
        <ul>
          <li>
            <Link to="/home">Головна</Link>
          </li>
          <li>
            <Link to="/about">Про Себе</Link>
          </li>
          <li>
            <a href="#">Екскурсії</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
