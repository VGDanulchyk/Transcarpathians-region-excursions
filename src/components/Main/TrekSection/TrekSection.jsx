import React from 'react';
import ExcursionsCreator from './TrekEditor';
import ExcursionsCreatorList from './TrekList/TrekList';
import Filter from './Filter/Filter';
import styles from './TrekSection.module.scss';

const TrekSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.titleText}>Створити власну екскурсію</h2>
      <ExcursionsCreator />
      <Filter />
      <ExcursionsCreatorList />
    </section>
  );
};

export default TrekSection;
