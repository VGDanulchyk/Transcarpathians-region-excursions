import React, { Component } from 'react';
import { connect } from 'react-redux';
import profileOperations from '../../../../redux/Profile/profileOperations';
import styles from './ProfileText.module.scss';

class ProfileText extends Component {
  componentDidMount() {
    this.props.onGetProfileInfo();
  }

  render() {
    return (
      <div className={styles.textContainer}>
        <h2 className={styles.titleText}>{this.props.title}</h2>

        <p>{this.props.text}</p>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     title: state.profileInfo.title,
//     text: state.profileInfo.text,
//   };
// };

const mapDispatchToProps = {
  onGetProfileInfo: profileOperations.getProfileInfo,
};

export default connect(null, mapDispatchToProps)(ProfileText);
