import React, {useContext, useState} from 'react';
import DataContext from '../../context';
import SvgSelector from '../svgSelector/SvgSelector';
import classes from './Title.module.css';
const Title = ({title, listId}) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const {updateListTitle} = useContext(DataContext);
  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(!open);
  };
  return (
    <div>
      {open ? (
        <div>
          <input
            className={classes.input}
            value={newTitle}
            autoFocus
            onBlur={handleOnBlur}
            onChange={(event) => {
              setNewTitle(event.target.value);
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
            {newTitle}
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
