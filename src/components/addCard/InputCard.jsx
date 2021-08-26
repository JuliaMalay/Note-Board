import React, {useContext, useState} from 'react';
import DataContext from '../../context';
import classes from './InputCard.module.css';
const InputCard = ({setOpen, listId, type}) => {
  const [title, setTitle] = useState('');
  const {addMoreCard, addMoreList} = useContext(DataContext);

  const handleConfirm = () => {
    if (title && type === 'list') {
      addMoreList(title);
    } else if (title) {
      addMoreCard(title.trim(), listId);
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
          placeholder={
            type === 'list' ? 'Enter list title' : 'Enter a title of this card'
          }
          className={classes.textarea}
          autoFocus
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div style={{display: 'flex'}}>
        <button className={classes.addBtn} onClick={handleConfirm}>
          {type === 'list' ? 'Add list' : 'Add card'}
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
