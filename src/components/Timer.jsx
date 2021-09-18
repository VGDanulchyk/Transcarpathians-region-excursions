import React from 'react';
import { connect } from 'react-redux';
import timerActions from '../redux/timerActions';

const Timer = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={() => onDecrement(5)}>-----</button>
      <div>
        <p>_______ </p>
      </div>
      <div>{value} minutes</div>
      <div>
        <p>_______ </p>
      </div>

      <button onClick={() => onIncrement(10)}>+++</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.timer.value,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrement: value => dispatch(timerActions.increment(10)),
//     onDecrement: value => dispatch(timerActions.decrement(5)),
//   };
// };

const mapDispatchToProps = {
  onIncrement: timerActions.increment,
  onDecrement: timerActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
