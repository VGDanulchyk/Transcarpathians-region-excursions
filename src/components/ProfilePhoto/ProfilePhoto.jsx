import React from 'react';
import styles from './ProfilePhoto.module.scss';

const ProfilePhoto = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.photosettings}
        src="https://scontent.fudj2-1.fna.fbcdn.net/v/t1.6435-9/47079595_770651503287063_7697121413555027968_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xd9TmJXPuaoAX82BmKj&_nc_ht=scontent.fudj2-1.fna&oh=da989bc1ef77e6406d7901da4877345c&oe=6147CBC3"
        alt="Profile photo"
      />
    </div>
  );
};

export default ProfilePhoto;
