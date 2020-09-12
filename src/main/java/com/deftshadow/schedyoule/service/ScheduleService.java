package com.deftshadow.schedyoule.service;

import com.deftshadow.schedyoule.entity.Schedule;

public interface ScheduleService {
    void updateSchedule(Schedule schedule);

    Schedule getScheduleByUserId(String userId);
}
