import React, { Component } from 'react';
import styles from './ExcursionItem.module.scss';
import loadStyles from '../../../../pages/Pages.module.scss';
import { Puff } from '@agney/react-loading';

class ExcursionItem extends Component {
  render() {
    const {
      loading,
      excursion: { img, title, text, time, price },
    } = this.props;

    if (loading) {
      return (
        <article className={loadStyles.loading}>
          <Puff width="200" color="#72712a" />
        </article>
      );
    }

    return (
      <article className={styles.container}>
        <ul className={styles.row}>
          <li className={styles.itemBlockImg}>
            <img className={styles.itemImg} src={img} alt="Excursion photo" />
          </li>
          <li className={styles.itemBlockText}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <p className={styles.itemText}>{text}</p>
            <h5 className={styles.description}>{time}</h5>
            <h5 className={styles.description}>{price}</h5>
          </li>
        </ul>
      </article>
    );
  }
}

export default ExcursionItem;
