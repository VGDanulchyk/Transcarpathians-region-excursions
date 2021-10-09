import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TrekEditor from './TrekEditor';
import TrekList from './TrekList/TrekList';
import styles from './TrekSection.module.scss';
import loadStyles from '../ProfileSection/Profile/Profile.module.scss';
import treksOperations from '../../../redux/Treks/treksOperations';

const TrekSection = props => {
  useEffect(() => {
    props.getTreks();
  }, []);

  if (props.loading) {
    return (
      <div className={loadStyles.loadingStyle}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.titleText}>Запропонувати похід</h2>
      <TrekEditor />
      <TrekList />
    </section>
  );
};

const mapStateToProps = state => ({
  treks: state.treks.items,
  loading: state.treks.loading,
});

const mapDispatchToProps = {
  getTreks: treksOperations.getTreks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrekSection);
