import React from 'react';
import { connect } from 'react-redux';
import styles from './Filter.module.scss';
import excursionsAction from '../../../redux/Excursion/excursionsAction';

const Filter = ({ value, onChangeFilter }) => (
  <section className={styles.wrapper}>
    <label className={styles.labelContainer}>
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
  value: state.excursions.filter,
});

const mapDispatchToProps = {
  onChangeFilter: excursionsAction.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
