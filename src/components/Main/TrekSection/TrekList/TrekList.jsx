import React from 'react';
import { connect } from 'react-redux';
import TrekListItem from './TrekListItem/TrekListItem';

const TrekList = ({ treks }) => (
  <ul>
    {treks.map(({ id }) => (
      <TrekListItem key={id} id={id} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  const { items, filter } = state.treks;
  const normalizedFilter = filter.toLowerCase();

  const visibleTreks = items.filter(trek => trek.text.toLowerCase().includes(normalizedFilter));

  return {
    treks: visibleTreks,
  };
};

export default connect(mapStateToProps)(TrekList);
