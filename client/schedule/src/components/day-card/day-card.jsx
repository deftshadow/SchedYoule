import React, { useState } from "react";
import classes from "./day-card.module.css";
import ScheduleList from "../schedule-list/schedule-list";
import DayCardHeader from "../day-card-header/day-card-header";
import Backdrop from "../UI/backdrop/backdrop";
import AddForm from "../add-form/add-form";

const DayCard = ({ dayOfWeek, unitList, setRenderTrigger }) => {
  const [isEditing, setIsEditing] = useState(false);

  const styles = classes.dayCard + " " + (isEditing ? classes.editing : null);

  return (
    <>
      <Backdrop show={isEditing} canceled={() => setIsEditing(false)} />
      <div className={styles}>
        <DayCardHeader
          isEditing={isEditing}
          clickHandler={() => setIsEditing(true)}
          dayName={dayOfWeek}
        />
        <div className={classes.List}>
          <ScheduleList
            dayOfWeek={dayOfWeek}
            isEditing={isEditing}
            unitList={unitList}
            setRenderTrigger={setRenderTrigger}
          />
          <AddForm dayOfWeek={dayOfWeek} setRenderTrigger={setRenderTrigger} />
        </div>
      </div>
    </>
  );
};

export default DayCard;
