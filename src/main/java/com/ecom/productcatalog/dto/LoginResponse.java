package com.ecom.productcatalog.dto;

import lombok.Data;

@Data
public class LoginResponse {

    private Long id;
    private String username;
    private String email;
    private String token;

    public LoginResponse(
            Long id,
            String username,
            String email,
            String token) {

        this.id = id;
        this.username = username;
        this.email = email;
        this.token = token;
    }
}