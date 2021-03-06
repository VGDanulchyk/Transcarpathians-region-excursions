import React, { Component } from 'react';
import treksOperations from '../../../redux/Treks/treksOperations';
import { connect } from 'react-redux';
import styles from './TrekEditor.module.scss';
import stylesBtn from '../Button/Button.module.scss';

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

    this.props.onAddTrek({ title, text });
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

        <section className={stylesBtn.buttonBody}>
          <article className={stylesBtn.lincStyles}>
            <button type="submit" className={`${stylesBtn.btn} ${stylesBtn.third}`}>
              Створити екскурсію
            </button>
          </article>
        </section>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTrek: treksOperations.addTrek,
};

export default connect(null, mapDispatchToProps)(TrekEditor);
