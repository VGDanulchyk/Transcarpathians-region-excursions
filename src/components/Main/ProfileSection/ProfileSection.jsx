import React from 'react';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileText from './ProfileText/ProfileText';
import styles from './ProfileSection.module.scss';

const ProfileSection = () => {
  return (
    <section className={styles.container}>
      <article className={styles.itemContainer}>
        <ProfilePhoto />
        <ProfileText />
      </article>
    </section>
  );
};

export default ProfileSection;
