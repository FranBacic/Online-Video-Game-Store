package com.ecom.productcatalog.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

    private static final long EXPIRATION_TIME =
            1000 * 60 * 60; // 1 hour

    private final String secretKey;
    private final SecretKey key;

    public JwtService(@Value("${jwt.secret-key}") String secretKey) {
        this.secretKey = secretKey;

        this.key = Keys.hmacShaKeyFor(
                secretKey.getBytes(StandardCharsets.UTF_8)
        );
    }

    public String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(
                        new Date(System.currentTimeMillis() + EXPIRATION_TIME)
                )
                .signWith(key)
                .compact();
    }

    public String extractEmail(String token) {

        return getClaims(token).getSubject();
    }

    public boolean isTokenValid(String token) {

        try {
            getClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private Claims getClaims(String token) {

        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}