import React from 'react';

import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderMenu = ({ active, setActive }) => {
  return (
    <div className={styles.container}>
      <div
        className={active ? 'styles.menuIcon styles.menuActive' : 'styles.menuIcon'}
        onClick={() => setActive(!active)}
      >
        <span></span>
      </div>

      <nav className={styles.menuBody}>
        <ul className={styles.menuList}>
          <li>
            <NavLink exact to="/" className={styles.menuLink} activeClassName={styles.active}>
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.menuLink} activeClassName={styles.active}>
              Про Себе
            </NavLink>
          </li>
          <li>
            <NavLink to="/excursions" className={styles.menuLink} activeClassName={styles.active}>
              Екскурсії
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={styles.menuLink} activeClassName={styles.active}>
              Галерея
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={styles.menuLink} activeClassName={styles.active}>
              Контакти
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
