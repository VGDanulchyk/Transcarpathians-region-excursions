import React, { Component } from 'react';
import treksActions from '../../../redux/Treks/treksActions';
import { connect } from 'react-redux';
import styles from './TrekEditor.module.scss';

class TrekEditor extends Component {
  state = {
    title: '',
    text: '',
  };

  handleTitleChange = titleChange => {
    this.setState({
      title: titleChange.target.value,
    });
  };

  handleTextChange = textChange => {
    this.setState({
      text: textChange.target.value,
    });
  };

  handleSubmit = submit => {
    submit.preventDefault();
    const { title, text } = this.state;

    this.props.onAddTrek(title, text);
    this.setState({ title: '', text: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.formContainer}>
        <label className={styles.labelContainer}>
          <article className={styles.inputContainer}>
            <input
              className={styles.inputStyles}
              type="text"
              placeholder="Назва походу"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </article>
        </label>
        <label className={styles.labelContainer}>
          <article className={styles.inputContainer}>
            <textarea
              className={styles.inputTextStyles}
              name="text"
              rows="10"
              cols="5"
              placeholder="Короткий опис походу"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </article>
        </label>

        <article>
          <button type="submit" className={styles.btn}>
            Створити екскурсію
          </button>
        </article>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTrek: treksActions.addTrek,
};

export default connect(null, mapDispatchToProps)(TrekEditor);
