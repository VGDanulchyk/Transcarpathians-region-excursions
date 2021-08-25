import React from 'react';
import styles from './ProfileText.module.scss';

const ProfileText = () => {
  return (
    <div className={styles.textContainer}>
      <h1>Hi, this is Me!!!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis dicta, dolorum
        eaque et eum fugit hic id minus molestias non nostrum quis quisquam sunt tempora. Architecto
        corporis maxime nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        blanditiis dicta, dolorum eaque et eum fugit hic id minus molestias non nostrum quis
        quisquam sunt tempora. Architecto corporis maxime nisi?
      </p>
    </div>
  );
};

export default ProfileText;
