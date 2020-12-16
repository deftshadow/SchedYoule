import React from "react";
import classes from './edit-button.module.css'
import EditIcon from "../../assets/icons/edit-icon.svg";

const EditButton = ({clickHandler}) => {
  return (
    <button onClick={clickHandler} className={classes.EditButton}>
      <img className={classes.EditIcon} src={EditIcon} />
    </button>
  );
};

export default EditButton;
