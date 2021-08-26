import React, {useState} from 'react';
import InputCard from './InputCard';
import classes from './InputContainer.module.css';
const InputContainer = ({listId}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <InputCard setOpen={setOpen} listId={listId} />
      ) : (
        <div
          className={classes.inputContainer}
          onClick={() => {
            setOpen(true);
          }}
        >
          <p>+ Add card</p>
        </div>
      )}
    </div>
  );
};

export default InputContainer;
