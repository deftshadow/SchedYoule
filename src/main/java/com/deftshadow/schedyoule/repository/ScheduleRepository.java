package com.deftshadow.schedyoule.repository;

import com.deftshadow.schedyoule.entity.Schedule;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ScheduleRepository extends MongoRepository<Schedule, String> {
    Schedule findByUserId(String userId);
}
