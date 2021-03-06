import React, { useState } from 'react';

import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
  const [active, setActive] = useState(false);

  const onMenuHandler = () => {
    setActive(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={active ? styles.menuActive : styles.menuIcon} onClick={onMenuHandler}>
        <span />
      </div>

      <nav className={active ? styles.menuBody : styles.menuBodyNone}>
        <ul className={styles.menuList}>
          <li className={styles.menuListItem}>
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
            <NavLink
              to="/excursions_creator"
              className={styles.menuLink}
              activeClassName={styles.active}
            >
              Ваш похід
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
