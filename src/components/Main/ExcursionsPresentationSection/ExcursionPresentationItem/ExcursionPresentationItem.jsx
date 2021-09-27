import React, { Component } from 'react';
import styles from './ExcursionPresentationItem.module.scss';

class ExcursionPresentationItem extends Component {
  componentDidMount() {
    this.props.onGetProfileInfo();
  }

  render() {
    const { title, text, loading } = this.props;

    if (loading) {
      return (
        <div className={styles.loadingStyle}>
          <h2>Loading...</h2>
        </div>
      );
    }

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
  }
}

export default ExcursionPresentationItem;

// const ExcursionPresentationItem = props => {
//   return (
//       <article className={styles.container}>
//         <ul className={styles.row}>
//           <li className={styles.itemBlockImg}>
//             <img className={styles.itemImg} src={props.excursion.img} alt="Excursion photo" />
//           </li>
//           <li className={styles.itemBlockText}>
//             <h3 className={styles.itemTitle}>{props.excursion.title}</h3>
//             <p className={styles.itemText}>{props.excursion.text}</p>
//           </li>
//         </ul>
//       </article>
//   );
// };
//
// export default ExcursionPresentationItem;
