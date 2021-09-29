import React, { Component } from 'react';
import styles from './ExcursionPresentationItem.module.scss';
import loadStyles from '../../ProfileSection/Profile/Profile.module.scss';

class ExcursionPresentationItem extends Component {
  render() {
    const {
      loading,
      excursion: { img, title, text },
    } = this.props;

    if (loading) {
      return (
        <div className={loadStyles.loadingStyle}>
          <h2>Loading...</h2>
        </div>
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
          </li>
        </ul>
      </article>
    );
  }
}

export default ExcursionPresentationItem;
