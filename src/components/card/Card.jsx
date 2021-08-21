import React, {useState} from 'react';
import classes from './Card.module.css';
const {v4: uuid} = require('uuid');
const Card = ({title}) => {
  const [newItem, setNewItem] = useState({id: uuid(), title: ''});
  const addItem = () => {};
  return (
    <div className={classes.card}>
      <div className={classes.card__title}>{title}</div>
      <hr />
      <input
        type="text"
        value={newItem}
        onChange={(event) => {
          setNewItem({...newItem, title: event.target.value});
        }}
      />
      <button onClick={addItem}></button>
    </div>
  );
};

export default Card;
