package com.ecom.productcatalog.service;

import com.ecom.productcatalog.dto.LoginResponse;
import com.ecom.productcatalog.dto.UserRequest;
import com.ecom.productcatalog.dto.UserResponse;
import com.ecom.productcatalog.model.User;
import com.ecom.productcatalog.repository.UserRepository;
import com.ecom.productcatalog.security.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public UserResponse register(UserRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Email already exists"
            );
        }

        User user = new User();

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        User savedUser = userRepository.save(user);

        return new UserResponse(
                savedUser.getId(),
                savedUser.getUsername(),
                savedUser.getEmail()
        );
    }

    public LoginResponse login (UserRequest request){
        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.UNAUTHORIZED,
                                "Invalid username or password"
                        )
                );

        boolean passwordMatches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!passwordMatches) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid username or password"
            );
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                token
        );

    }

    public UserResponse getCurrentUser(String email) {

        User user = userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "User not found"
                        )
                );

        return new UserResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail()
        );
    }
}
