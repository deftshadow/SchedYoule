package com.deftshadow.schedyoule.entity;


import com.deftshadow.schedyoule.common.DayOfWeek;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@AllArgsConstructor
@Data
public class Day {

    private DayOfWeek dayOfWeek;

    private List<ScheduleUnit> unitList;
}
