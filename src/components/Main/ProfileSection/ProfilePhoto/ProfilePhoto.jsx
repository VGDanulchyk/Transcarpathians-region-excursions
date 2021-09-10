import React from 'react';
import styles from './ProfilePhoto.module.scss';
import avatar from '../../../../img/MainImg/ProfileImg/Avatar.jpg';

const ProfilePhoto = () => {
  return (
    <div className={styles.container}>
      <img className={styles.photosettings} src={avatar} alt="Profile photo" />
    </div>
  );
};

export default ProfilePhoto;
