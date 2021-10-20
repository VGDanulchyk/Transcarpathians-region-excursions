import React, { useEffect } from 'react';
import ExcursionPresentationItem from './ExcursionPresentationItem/ExcursionPresentationItem';
import { connect } from 'react-redux';
// import { Puff } from '@agney/react-loading';
// import loadStyles from '../../../pages/Pages.module.scss';
import styles from './ExcursionsPresentationSection.module.scss';
import Button from '../Button/Button';

import { NavLink } from 'react-router-dom';
import getExcursionsPresentation from '../../../redux/ExcursionsPresentation/excursionsPresentationOperations';

const ExcursionsPresentationSection = props => {
  useEffect(() => {
    props.getExcursionsPresentation();
  }, []);

  if (props.loading) {
    return (
      <article>
        {/*<article className={loadStyles.loading}>*/}
        {/*  <Puff width="200" color="#72712a" />*/}
        {/*</article>*/}
      </article>
    );
  }

  return (
    <section>
      <section className={styles.wrapper}>
        <NavLink to="/excursions" className={styles.titleLink}>
          <h2 className={styles.titleText}>Екскурсії</h2>
        </NavLink>

        <section className={styles.itemContainer}>
          {props.excursions.map(excursion => (
            <ExcursionPresentationItem
              key={excursion.id}
              excursion={{
                img: excursion.img,
                title: excursion.title,
                text: excursion.description,
              }}
            />
          ))}
        </section>

        <section className={styles.buttonSectionWrapper}>
          <article className={styles.buttonWrapper}>
            <Button button={{ name: 'Запропонувати Похід', path: '/excursions_creator' }} />
          </article>

          <article className={styles.buttonWrapper}>
            <Button button={{ name: 'Більше Екскурсій', path: '/excursions' }} />
          </article>
        </section>
      </section>
    </section>
  );
};

const mapStateToProps = state => ({
  excursions: state.excursionsPresentation.trips,
  loading: state.excursionsPresentation.loading,
});

const mapDispatchToProps = {
  getExcursionsPresentation,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExcursionsPresentationSection);
