import React from 'react';
import TrekEditor from './TrekEditor';
import TrekList from './TrekList/TrekList';
import styles from './TrekSection.module.scss';

const TrekSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.titleText}>Запропонувати похід</h2>
      <TrekEditor />
      <TrekList />
    </section>
  );
};

export default TrekSection;
