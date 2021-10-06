import React from 'react';
import { connect } from 'react-redux';
import treksActions from '../../../../../redux/Treks/treksActions';
import styles from './TrekListItem.module.scss';

const TrekListItem = ({ title, text, price, onRemove }) => {
  return (
    <li className={styles.itemContainer}>
      <section className={styles.itemTitle}>
        <h3>{title}</h3>
      </section>
      <section className={styles.itemContent}>
        <article className={styles.itemDescription}>
          <p className={styles.itemText}>{text}</p>
          <p className={styles.itemPrice}>{price} грн.</p>
        </article>
        <article className={styles.itemBtnContainer}>
          <button className={styles.itemBtn} type="button" onClick={onRemove}>
            X
          </button>
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
  onRemove: () => dispatch(treksActions.removeTrek(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrekListItem);
