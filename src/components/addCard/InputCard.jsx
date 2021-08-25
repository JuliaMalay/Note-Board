import React from 'react';
import classes from './InputCard.module.css';
const InputCard = ({setOpen}) => {
  return (
    <div>
      <div>
        <textarea
          placeholder="Enter a title of this card"
          className={classes.textarea}
          onBlur={() => {
            setOpen(false);
          }}
          autoFocus
        />
      </div>
      <div>
        <button
          className={classes.addBtn}
          onClick={() => {
            setOpen(false);
          }}
        >
          {' '}
          + Add card
        </button>
        <button
          className={classes.clearBtn}
          onClick={() => {
            setOpen(false);
          }}
        >
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default InputCard;
