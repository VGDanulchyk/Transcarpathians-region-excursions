import React, { Component } from 'react';
import { connect } from 'react-redux';
import profileOperations from '../../../../redux/Profile/profileOperations';
import styles from './Profile.module.scss';
import avatar from '../../../../img/MainImg/ProfileImg/Avatar.jpg';

class Profile extends Component {
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
      <div className={styles.mainContainer}>
        <div className={styles.photoContainer}>
          <img className={styles.photosettings} src={avatar} alt="Profile photo" />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.titleText}>{title}</h2>

          <p>{text}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.profile.title,
    text: state.profile.text,
    loading: state.profile.loading,
  };
};

const mapDispatchToProps = {
  onGetProfileInfo: profileOperations.getProfileInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
