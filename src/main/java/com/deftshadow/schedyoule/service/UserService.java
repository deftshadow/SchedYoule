package com.deftshadow.schedyoule.service;

import com.deftshadow.schedyoule.entity.User;

public interface UserService {
    void register(User user);

    User getUserByUsername(String username);
}
