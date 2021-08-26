import React from 'react';
import Card from '../card/Card';
import Title from '../title/Title';
import InputContainer from '../addCard/InputContainer';
import classes from './List.module.css';
const List = ({list}) => {
  return (
    <div className={classes.list}>
      <Title title={list.title} />
      {list.cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}

      <InputContainer listId={list.id} />
    </div>
  );
};

export default List;
