import React from 'react';
import Card from '../card/Card';
import Title from '../title/Title';
import InputContainer from '../addCard/InputContainer';
import classes from './List.module.css';
import {Droppable} from 'react-beautiful-dnd';
const List = ({list}) => {
  return (
    <div className={classes.list}>
      <Title title={list.title} listId={list.id} />
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {list.cards.map((card, index) => (
              <Card card={card} key={card.id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <InputContainer listId={list.id} />
    </div>
  );
};

export default List;
