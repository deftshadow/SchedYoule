import React, { useEffect, useState } from "react";
import classes from "./days.module.css";
import DayCard from "../../components/day-card/day-card";
import ScheduleService from "../../service/scheduleService";

const daysOfWeek = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const Days = (props) => {
  const [data, setData] = useState(null);
  const [renderTrigger, setRenderTrigger] = useState(false);
  let content = null;

  useEffect(() => {
    ScheduleService.getSchedule(setData);
    window.UpdateChecker = true;
  }, [renderTrigger]);

  useEffect(() => {
    ScheduleService.getSchedule(setData);
  }, []);

  if (data !== null) {
    window.Data = data;
    content = data.days.map((item) => {
      return (
        <DayCard
          key={`${item.dayOfWeek}-${item.unitList.length}`}
          unitList={item.unitList}
          dayOfWeek={item.dayOfWeek}
          setRenderTrigger={setRenderTrigger}
        />
      );
    });
  }
  else {
    content = <i className="fas fa-sync-alt fa-spin fa-5x loader"></i>
  }
  return (
    <div id="container" className={classes.days}>
      {content}
    </div>
  );
};

export default Days;
