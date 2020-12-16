import React from "react";

import ScheduleItem from "../schedule-item/schedule-item";
import {hashCode} from '../../service/helper'

const ScheduleList = ({ isEditing, unitList, dayOfWeek, setRenderTrigger }) => {
  const content = unitList.map((item, index) => {
    return (
      <ScheduleItem
        key={hashCode(`${item}-${index}`)}
        dayOfWeek={dayOfWeek}
        fromDate={new Date(Date.parse(item.fromDate))}
        toDate={new Date(Date.parse(item.toDate))}
        description={item.description}
        isEditing={isEditing}
        index={index}
        setRenderTrigger={setRenderTrigger}
      />
    );
  });
  return (
    <>
      <ul>{content}</ul>
    </>
  );
};

export default ScheduleList;
