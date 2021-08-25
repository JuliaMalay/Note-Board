import React, {useState} from 'react';
import InputCard from './InputCard';
import classes from './InputContainer.module.css';
const InputContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <InputCard setOpen={setOpen} />
      ) : (
        <div className={classes.inputContainer}>
          <p
            onClick={() => {
              setOpen(true);
            }}
          >
            + Add card
          </p>
        </div>
      )}
    </div>
  );
};

export default InputContainer;
