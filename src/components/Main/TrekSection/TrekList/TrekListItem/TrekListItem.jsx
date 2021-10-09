import React from 'react';
import { connect } from 'react-redux';
import treksOperations from '../../../../../redux/Treks/treksOperations';

import styles from './TrekListItem.module.scss';

const TrekListItem = ({ title, text, img, onRemove }) => {
  return (
    <li className={styles.wrapper}>
      <section className={styles.btnWrapper}>
        <article className={styles.itemBtnContainer}>
          <button className={styles.itemBtn} type="button" onClick={onRemove}>
            X
          </button>
        </article>
      </section>

      <section className={styles.titleWrapper}>
        <article className={styles.itemTitle}>
          <h3>{title}</h3>
        </article>
      </section>

      <section className={styles.contentWrapper}>
        <article className={styles.itemContent}>
          <article className={styles.imgContainer}>
            <img className={styles.itemImg} src={img} alt="Trek image" />
          </article>
          <article className={styles.itemDescription}>
            <p className={styles.itemText}>{text}</p>
          </article>
        </article>
      </section>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.treks.items.find(item => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(treksOperations.removeTrek(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrekListItem);
