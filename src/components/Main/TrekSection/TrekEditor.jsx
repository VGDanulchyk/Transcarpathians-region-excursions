import React, { Component } from 'react';
import treksActions from '../../../redux/Treks/treksActions';
import { connect } from 'react-redux';

class TrekEditor extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTrek(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Опис екскурсії
          <input type="text" value={this.state.text} onChange={this.handleChange} />
        </label>

        <button type="submit">Створити екскурсію</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTrek: treksActions.addTrek,
};

export default connect(null, mapDispatchToProps)(TrekEditor);
