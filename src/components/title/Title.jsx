import React, {useState} from 'react';
import SvgSelector from '../svgSelector/SvgSelector';
import classes from './Title.module.css';
const Title = ({title}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <div>
          <input
            className={classes.input}
            value={title}
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
            {title}
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
