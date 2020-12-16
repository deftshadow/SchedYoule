import React from "react";
import EditButton from "../edit-button/edit-button";
import classes from "./day-card-header.module.css";

const DayCardHeader = ({ clickHandler, dayName }) => {
  return (
    <div className={classes.Header}>
      {dayName}
      <EditButton
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default DayCardHeader;
