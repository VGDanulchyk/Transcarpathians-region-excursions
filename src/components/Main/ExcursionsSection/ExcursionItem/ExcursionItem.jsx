import React, { Component } from 'react';
import styles from './ExcursionItem.module.scss';
import loadStyles from '../../ProfileSection/Profile/Profile.module.scss';

class ExcursionItem extends Component {
  render() {
    const {
      loading,
      excursion: { img, title, text, time, price },
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
            <h5 className={styles.description}>{time}</h5>
            <h5 className={styles.description}>{price}</h5>
          </li>
        </ul>
      </article>
    );
  }
}

export default ExcursionItem;

// const ExcursionItem = props => {
//   return (
//       <article className={styles.container}>
//         <ul className={styles.row}>
//           <li className={styles.itemBlockImg}>
//             <img className={styles.itemImg} src={props.excursion.img} alt="Excursion photo" />
//           </li>
//           <li className={styles.itemBlockText}>
//             <h3 className={styles.itemTitle}>{props.excursion.title}</h3>
//             <p className={styles.itemText}>{props.excursion.text}</p>
//             <h5 className={styles.description}>{props.excursion.time}</h5>
//             <h5 className={styles.description}>{props.excursion.price}</h5>
//           </li>
//         </ul>
//       </article>
//   );
// };
//
// export default ExcursionItem;
