import React from 'react';
import styles from './HeaderSection.module.scss';

const HeaderSection = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default HeaderSection;
