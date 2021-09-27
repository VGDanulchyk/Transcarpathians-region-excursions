import React from 'react';
import ProfileText from './Profile/Profile';
import styles from './ProfileSection.module.scss';

const ProfileSection = () => {
  return (
    <section className={styles.container}>
      <article className={styles.itemContainer}>
        <ProfileText />
      </article>
    </section>
  );
};

export default ProfileSection;
