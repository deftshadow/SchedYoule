package com.deftshadow.schedyoule.controller;

import com.deftshadow.schedyoule.entity.User;
import com.deftshadow.schedyoule.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public void register(@RequestBody @Valid User user) {
        userService.register(user);
    }

    @GetMapping("/info")
    public User getUserInfo(Principal principal) {
        return userService.getUserByUsername(principal.getName());
    }
}
