import React, { useState } from "react";
import ScheduleService, { weekToNumber } from "../../service/scheduleService";
import classes from "./add-form.module.css";
import _ from "lodash";
import { normalizeUnits } from "moment";

const AddForm = ({ dayOfWeek, setRenderTrigger }) => {
  const [itemDescription, setItemDescription] = useState("");
  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);

  const resetHandler = () => {
    setItemDescription("");
    setStartHours(0);
    setStartMinutes(0);
    setEndHours(0);
    setEndMinutes(0);
  };

  const addScheduleHandler = (event) => {
    event.preventDefault();
    const newDataStart = new Date();
    const newDataEnd = new Date();
    newDataStart.setHours(+startHours + 3);
    newDataStart.setMinutes(startMinutes);
    newDataEnd.setHours(+endHours + 3);
    newDataEnd.setMinutes(endMinutes);
    const data = {
      description: itemDescription,
      fromDate: newDataStart.toISOString(),
      toDate: newDataEnd.toISOString(),
    };
    const newAppData = _.cloneDeep(window.Data);
    newAppData.days[weekToNumber[dayOfWeek]].unitList.push(data);
    ScheduleService.addSchedule(dayOfWeek, newAppData.days, setRenderTrigger);
    resetHandler();
  };

  return (
    <div className={classes.AddForm}>
      <input
        value={itemDescription}
        className={classes.DescriptionInput}
        onChange={(event) => setItemDescription(event.target.value)}
      ></input>
      {/* <div className={classes.Time}> */}
      <form
        onSubmit={(event) => addScheduleHandler(event)}
        className={classes.Time}
      >
        <input
          value={startHours}
          onChange={(event) => setStartHours(event.target.value)}
          className={classes.DateInput}
          type="number"
          min={0}
          max={23}
        />
        :
        <input
          value={startMinutes}
          onChange={(event) => setStartMinutes(event.target.value)}
          className={classes.DateInput}
          min={0}
          max={59}
        />
        -
        <input
          value={endHours}
          onChange={(event) => setEndHours(event.target.value)}
          className={classes.DateInput}
          min={0}
          max={23}
        />
        :
        <input
          value={endMinutes}
          onChange={(event) => setEndMinutes(event.target.value)}
          className={classes.DateInput}
          min={0}
          max={59}
        />
        <button className={classes.Submit} type="submit">
          <i className={"fas fa-check"}></i>
        </button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default AddForm;
