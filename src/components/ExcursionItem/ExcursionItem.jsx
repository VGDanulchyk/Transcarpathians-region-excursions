import React from 'react';
import styles from './ExcursionItem.module.scss';

const ExcursionItem = props => {
  return (
    <article className={styles.container}>
      <ul className={styles.row}>
        <li className={styles.itemBlockImg}>
          <img className={styles.itemImg} src={props.excursion.img} alt="Excursion photo" />
        </li>
        <li className={styles.itemBlockText}>
          <h3 className={styles.itemTitle}>{props.excursion.title}</h3>
          <p className={styles.itemText}>{props.excursion.text}</p>
          <h5>{props.excursion.time}</h5>
          <h5>{props.excursion.price}</h5>
        </li>
      </ul>
    </article>
  );
};

export default ExcursionItem;
