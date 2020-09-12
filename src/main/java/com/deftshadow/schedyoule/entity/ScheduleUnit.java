package com.deftshadow.schedyoule.entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ScheduleUnit {
    private LocalDateTime fromDate;
    private LocalDateTime toDate;
    private String description;
}
