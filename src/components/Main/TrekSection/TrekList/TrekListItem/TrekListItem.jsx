import React from 'react';
import { connect } from 'react-redux';
import treksActions from '../../../../../redux/Treks/treksActions';

const TrekListItem = ({ text, onRemove }) => {
  return (
    <li>
      {/*<h2>{title}</h2>*/}
      <p>{text}</p>
      {/*<p>{price}</p>*/}
      <section>
        <button type="button" onClick={onRemove}>
          Видалити
        </button>
      </section>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.treks.items.find(item => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(treksActions.removeTrek(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrekListItem);
