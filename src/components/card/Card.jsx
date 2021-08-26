import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import classes from './Card.module.css';

const Card = ({card, index}) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className={classes.card}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {card.title}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
