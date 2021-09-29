import React, { useEffect } from 'react';
import ExcursionPresentationItem from './ExcursionPresentationItem/ExcursionPresentationItem';
import { connect } from 'react-redux';
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
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className={styles.wrapper}>
      <NavLink to="/excursions" className={styles.titleLink}>
        <h2 className={styles.titleText}>Екскурсії</h2>
      </NavLink>

      <article className={styles.itemContainer}>
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
      </article>

      <Button button={{ name: 'Більше Екскурсій', path: '/excursions' }} />
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
