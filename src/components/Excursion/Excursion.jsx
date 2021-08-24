import React from 'react';

const ExcursionItem = props => {
  return (
    <div>
      <img src={props.excursion.img} alt="Excursion photo" />
      <h3>{props.excursion.title}</h3>
      <p>{props.excursion.text}</p>
      <h5>{props.excursion.time}</h5>
      <h5>{props.excursion.price}</h5>
    </div>
  );
};

export default ExcursionItem;
