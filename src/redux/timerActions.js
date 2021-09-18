const increment = value => {
  return {
    type: 'TIMER_INCREMENT',
    payload: {
      value,
    },
  };
};

const decrement = value => {
  return {
    type: 'TIMER_DECREMENT',
    payload: {
      value,
    },
  };
};

export default { increment, decrement };
