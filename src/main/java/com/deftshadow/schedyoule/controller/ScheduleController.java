package com.deftshadow.schedyoule.controller;

import com.deftshadow.schedyoule.entity.Schedule;
import com.deftshadow.schedyoule.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/schedule")
public class ScheduleController {
    private final ScheduleService scheduleService;

    @PutMapping(value = "")
    public void updateSchedule(@RequestBody Schedule schedule) {
        scheduleService.updateSchedule(schedule);
    }


    @GetMapping(value = "/user/{id}")
    public Schedule getScheduleByUserId(@PathVariable("id") String userId) {
        return scheduleService.getScheduleByUserId(userId);
    }
}
