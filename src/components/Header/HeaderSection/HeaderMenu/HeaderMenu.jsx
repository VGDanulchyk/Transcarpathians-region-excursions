import React from 'react';

import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.stroke}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={styles.active}>
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={styles.active}>
              Про Себе
            </NavLink>
          </li>
          <li>
            <NavLink to="/excursions" activeClassName={styles.active}>
              Екскурсії
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName={styles.active}>
              Галерея
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName={styles.active}>
              Контакти
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
