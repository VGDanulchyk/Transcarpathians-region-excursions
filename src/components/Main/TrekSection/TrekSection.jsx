import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TrekEditor from './TrekEditor';
import TrekList from './TrekList/TrekList';
import styles from './TrekSection.module.scss';
import loadStyles from '../../../pages/Pages.module.scss';
import treksOperations from '../../../redux/Treks/treksOperations';
import { Puff } from '@agney/react-loading';

const TrekSection = props => {
  useEffect(() => {
    props.getTreks();
  }, []);

  if (props.loading) {
    return (
      <article className={loadStyles.loading}>
        <Puff width="200" color="#72712a" />
      </article>
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
