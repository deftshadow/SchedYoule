package com.deftshadow.schedyoule.service;

import com.deftshadow.schedyoule.common.DayOfWeek;
import com.deftshadow.schedyoule.entity.Day;
import com.deftshadow.schedyoule.entity.Schedule;
import com.deftshadow.schedyoule.entity.User;
import com.deftshadow.schedyoule.repository.ScheduleRepository;
import com.deftshadow.schedyoule.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ScheduleRepository scheduleRepository;
    private final PasswordEncoder encoder;

    @Override
    public void register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        try {
            var savedUser = userRepository.save(user);
            Schedule schedule = new Schedule();
            List<Day> days = new ArrayList<>();
            for (var dayOfWeek : DayOfWeek.values()) {
                days.add(new Day(dayOfWeek, new ArrayList<>()));
            }
            schedule.setDays(days);
            schedule.setUserId(savedUser.getId());
            scheduleRepository.save(schedule);
        } catch (DuplicateKeyException e) {
            throw new RuntimeException("User with this username is already exists");
        }
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("Not found user by username"));
    }

}
