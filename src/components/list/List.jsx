import React from 'react';
import Card from '../card/Card';
import Title from '../title/Title';
import InputContainer from '../addCard/InputContainer';
import classes from './List.module.css';
const List = () => {
  return (
    <div className={classes.list}>
      <Title />
      <Card />
      <InputContainer />
    </div>
  );
};

export default List;
