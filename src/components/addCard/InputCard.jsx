import React, {useContext, useState} from 'react';
import DataContext from '../../context';
import classes from './InputCard.module.css';
const InputCard = ({setOpen, listId}) => {
  const [cardTitle, setCardTitle] = useState('');
  const {addMoreCard} = useContext(DataContext);

  const handleConfirm = () => {
    if (cardTitle) {
      addMoreCard(cardTitle, listId);
    }
    setOpen(false);
  };
  return (
    <div
    // onBlur={() => {
    //   setOpen(false);
    // }}
    // tabIndex="0"
    >
      <div>
        <textarea
          placeholder="Enter a title of this card"
          className={classes.textarea}
          autoFocus
          value={cardTitle}
          onChange={(event) => {
            setCardTitle(event.target.value);
          }}
        />
      </div>
      <div>
        <button className={classes.addBtn} onClick={handleConfirm}>
          Add card
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
