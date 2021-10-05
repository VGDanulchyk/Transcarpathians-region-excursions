import React, { Component } from 'react';
import treksActions from '../../../redux/Treks/treksActions';
import { connect } from 'react-redux';
import styles from './TrekEditor.module.scss';

class TrekEditor extends Component {
  state = {
    title: '',
    text: '',
    price: '',
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

  handlePriceChange = priceChange => {
    this.setState({
      price: priceChange.target.value,
    });
  };

  handleSubmit = submit => {
    submit.preventDefault();
    const { title, text, price } = this.state;

    this.props.onAddTrek(title, text, price);
    this.setState({ title: '', text: '', price: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.formContainer}>
        <label className={styles.labelContainer}>
          <article className={styles.title}>
            <h3>Назва екскурсії</h3>
          </article>
          <article className={styles.inputContainer}>
            <input
              className={styles.inputStyles}
              type="text"
              placeholder="Назва екскурсії"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </article>
        </label>
        <label className={styles.labelContainer}>
          <article className={styles.title}>
            <h3>Опис</h3>
          </article>
          <article className={styles.inputContainer}>
            <input
              className={styles.inputStyles}
              type="text"
              placeholder="Короткий опис, ідеальної екскурсії"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </article>
        </label>
        <label className={styles.labelContainer}>
          <article className={styles.title}>
            <h3>Ціна</h3>
          </article>
          <article className={styles.inputContainer}>
            <input
              className={styles.inputStyles}
              type="text"
              placeholder="Бажана ціна"
              value={this.state.price}
              onChange={this.handlePriceChange}
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
