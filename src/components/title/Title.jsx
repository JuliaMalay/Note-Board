import React, {useState} from 'react';
import SvgSelector from '../svgSelector/SvgSelector';
import Input from '../UI/input/Input';
import classes from './Title.module.css';
const Title = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div>
          <Input
            value="Hello!"
            autoFocus
            onBlur={() => {
              setOpen(!open);
            }}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <h2
            onClick={() => {
              setOpen(!open);
            }}
          >
            Todo
          </h2>
          <div className="svg">
            <SvgSelector id="more" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Title;
