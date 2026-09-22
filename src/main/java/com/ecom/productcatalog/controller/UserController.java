package com.ecom.productcatalog.controller;

import com.ecom.productcatalog.dto.LoginResponse;
import com.ecom.productcatalog.dto.UserRequest;
import com.ecom.productcatalog.dto.UserResponse;
import com.ecom.productcatalog.model.User;
import com.ecom.productcatalog.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public UserResponse register(@RequestBody UserRequest request){
        return userService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody UserRequest request){
        return userService.login(request);
    }


    @GetMapping("/me")
    public UserResponse getCurrentUser(Authentication authentication) {

        return userService.getCurrentUser(authentication.getName());
    }

}
