import React, {useState} from 'react';
import SvgSelector from '../svgSelector/SvgSelector';
import classes from './Title.module.css';
const Title = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div>
          <input
            className={classes.input}
            value="Todo"
            autoFocus
            onBlur={() => {
              setOpen(!open);
            }}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <h2
            className={classes.editableTitle}
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
