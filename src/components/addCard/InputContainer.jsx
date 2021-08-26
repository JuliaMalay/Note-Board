import React, {useState} from 'react';
import InputCard from './InputCard';
import classes from './InputContainer.module.css';
const InputContainer = ({listId, type}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      {open ? (
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      ) : (
        <div
          className={classes.inputContainer}
          onClick={() => {
            setOpen(true);
          }}
        >
          <p>{type === 'list' ? '+ Add new list' : '+ Add card'}</p>
        </div>
      )}
    </div>
  );
};

export default InputContainer;
