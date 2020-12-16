import React, { useEffect, useRef, useState } from "react";
import classes from "./schedule-item.module.css";
import ScheduleService, { weekToNumber } from "../../service/scheduleService";
import _ from "lodash";
import moment from "moment";

const twoNumber = (number) => {
  return Math.floor(number / 10) === 0 ? `0${number}` : number;
};

const getTimeHours = (date) => {
  const hours = twoNumber(date.getHours());
  return `${hours}`;
};

const getTimeMinutes = (date) => {
  const minutes = twoNumber(date.getMinutes());
  return `${minutes}`;
};

const ScheduleItem = ({
  fromDate,
  toDate,
  description,
  isEditing,
  dayOfWeek,
  index,
  setRenderTrigger,
}) => {
  const [itemDescription, setItemDescription] = useState(description);
  const [startHours, setStartHours] = useState(getTimeHours(fromDate));
  const [startMinutes, setStartMinutes] = useState(getTimeMinutes(fromDate));
  const [endHours, setEndHours] = useState(getTimeHours(toDate));
  const [endMinutes, setEndMinutes] = useState(getTimeMinutes(toDate));
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!isEditing && window.UpdateChecker) {
        console.log(isEditing);
        const newDataStart = moment();
        const newDataEnd = moment();
        newDataStart.hour(+startHours + 3);
        newDataStart.minute(+startMinutes);
        newDataEnd.hour(+endHours + 3);
        newDataEnd.minute(+endMinutes);
        const data = {
          description: itemDescription,
          fromDate: newDataStart.toISOString(),
          toDate: newDataEnd.toISOString(),
        };
        console.log(data);
        const newAppData = _.cloneDeep(window.Data);
        newAppData.days[weekToNumber[dayOfWeek]].unitList[index] = data;
        window.UpdateChecker = false;
        ScheduleService.changeSchedule(newAppData.days, setRenderTrigger);
        console.log("editing complete");
      }
    }
  }, [isEditing]);

  const deleteButtonHandler = (event) => {
    const newAppData = _.cloneDeep(window.Data);
    newAppData.days[weekToNumber[dayOfWeek]].unitList.splice(index, 1);
    console.log(newAppData.days[weekToNumber[dayOfWeek]].unitList);
    ScheduleService.deleteSchedule(
      dayOfWeek,
      newAppData.days,
      index,
      setRenderTrigger
    );
    console.log(index);
  };

  return (
    <li className={classes.scheduleItem}>
      <input
        disabled={!isEditing}
        value={itemDescription}
        className={classes.DescriptionInput}
        onChange={(event) => setItemDescription(event.target.value)}
      ></input>
      <div className={classes.time}>
        <form>
          <input
            disabled={!isEditing}
            value={startHours}
            onChange={(event) => setStartHours(event.target.value)}
            className={classes.DateInput}
            min={0}
            max={23}
          />
          :
          <input
            disabled={!isEditing}
            value={startMinutes}
            onChange={(event) => setStartMinutes(event.target.value)}
            className={classes.DateInput}
            min={0}
            max={59}
          />
          -
          <input
            disabled={!isEditing}
            value={endHours}
            onChange={(event) => setEndHours(event.target.value)}
            className={classes.DateInput}
            min={0}
            max={23}
            required
          />
          :
          <input
            disabled={!isEditing}
            value={endMinutes}
            onChange={(event) => setEndMinutes(event.target.value)}
            className={classes.DateInput}
            min={0}
            max={59}
            required
          />
        </form>
      </div>
      <button className={classes.DeleteButton} onClick={deleteButtonHandler}>
        <i className={"far fa-trash-alt"}></i>
      </button>
    </li>
  );
};

export default ScheduleItem;
