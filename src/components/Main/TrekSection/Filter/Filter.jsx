import React from 'react';
import { connect } from 'react-redux';
import treksAction from '../../../../redux/Treks/treksActions';
import styles from './Filter.module.scss';

const Filter = ({ value, onChangeFilter }) => (
  <section className={styles.wrapper}>
    <label className={styles.labelContainer}>
      <article className={styles.title}>
        <h3>Фільтр</h3>
      </article>
      <article className={styles.inputContainer}>
        <input
          className={styles.filterStyles}
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </article>
    </label>
  </section>
);

const mapStateToProps = state => ({
  value: state.treks.filter,
});

const mapDispatchToProps = {
  onChangeFilter: treksAction.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
