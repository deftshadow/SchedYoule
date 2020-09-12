package com.deftshadow.schedyoule.service;

import com.deftshadow.schedyoule.entity.Schedule;
import com.deftshadow.schedyoule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {

    private final ScheduleRepository scheduleRepository;

    @Override
    public void updateSchedule(Schedule schedule) {
        if (schedule.getId() == null) {
            schedule.setId(scheduleRepository.findByUserId(schedule.getUserId()).getId());
        }
        scheduleRepository.save(schedule);
    }

    @Override
    public Schedule getScheduleByUserId(String userId) {
        return scheduleRepository.findByUserId(userId);
    }
}
