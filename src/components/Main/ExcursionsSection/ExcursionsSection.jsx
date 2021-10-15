import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExcursionItem from './ExcursionItem/ExcursionItem';
import getExcursions from '../../../redux/Excursion/excursionsOperations';
import styles from './ExcursionsSection.module.scss';
import loadStyles from '../ProfileSection/Profile/Profile.module.scss';
import Filter from '../Filter/Filter';

const ExcursionsSection = props => {
  useEffect(() => {
    props.getExcursions();
  }, []);

  if (props.loading) {
    return (
      <div className={loadStyles.loadingStyle}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section>
      <Filter />
      <article className={styles.container}>
        {props.trips.map(trip => (
          <ExcursionItem
            key={trip.id}
            excursion={{
              img: trip.img,
              title: trip.title,
              text: trip.description,
              time: trip.time,
              price: trip.price,
            }}
          />
        ))}
      </article>
    </section>
  );
};

const mapStateToProps = state => {
  const { trips, filter } = state.excursions;
  const normalizedFilter = filter.toLowerCase();

  const visibleTreks = trips.filter(trip => trip.title.toLowerCase().includes(normalizedFilter));

  return {
    trips: visibleTreks,
    loading: state.excursions.loading,
  };
};

const mapDispatchToProps = {
  getExcursions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExcursionsSection);
