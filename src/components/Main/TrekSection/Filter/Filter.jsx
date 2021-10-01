import React from 'react';
import { connect } from 'react-redux';
import treksAction from '../../../../redux/Treks/treksActions';

const Filter = ({ value, onChangeFilter }) => (
  <article>
    <input type="text" value={value} onChange={e => onChangeFilter(e.target.value)} />
  </article>
);

const mapStateToProps = state => ({
  value: state.treks.filter,
});

const mapDispatchToProps = {
  onChangeFilter: treksAction.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
