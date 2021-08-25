import React from 'react';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileText from './ProfileText/ProfileText';
import styles from './ProfileSection.module.scss';

const ProfileSection = () => {
  return (
    <div className={styles.container}>
      <ProfilePhoto />
      <ProfileText />
    </div>
  );
};

export default ProfileSection;
