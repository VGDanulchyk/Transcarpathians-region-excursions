import React from 'react';
import styles from './ExcursionPresentationItem.module.scss';

const ExcursionPresentationItem = props => {
  return (
    <article className={styles.container}>
      <ul className={styles.row}>
        <li className={styles.itemBlockImg}>
          <img className={styles.itemImg} src={props.excursion.img} alt="Excursion photo" />
        </li>
        <li className={styles.itemBlockText}>
          <h3 className={styles.itemTitle}>{props.excursion.title}</h3>
          <p className={styles.itemText}>{props.excursion.text}</p>
        </li>
      </ul>
    </article>
  );
};

export default ExcursionPresentationItem;
