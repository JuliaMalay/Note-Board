import React from 'react';
import classes from './Card.module.css';

const Card = ({card}) => {
  return <div className={classes.card}>{card.title}</div>;
};

export default Card;
