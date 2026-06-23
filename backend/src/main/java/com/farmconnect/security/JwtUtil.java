package com.farmconnect.security;

import java.security.Key;
import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    private static final String SECRET =
            "farmconnectsecretkeyfarmconnectsecretkey12345";

    private final SecretKey key =
            Keys.hmacShaKeyFor(
                SECRET.getBytes()
            );

    public String generateToken(
            String email,
            String role) {

        return Jwts.builder()

                .subject(email)

                .claim(
                    "role",
                    role
                )

                .issuedAt(
                    new Date()
                )

                .expiration(
                    new Date(
                        System.currentTimeMillis()
                        + 86400000
                    )
                )

                .signWith(key)

                .compact();
    }

    public String extractEmail(
            String token) {

        Claims claims =
            Jwts.parser()

                .verifyWith(key)

                .build()

                .parseSignedClaims(token)

                .getPayload();

        return claims.getSubject();
    }
    
    public String extractRole(
            String token) {

        Claims claims =
            Jwts.parser()

                .verifyWith(key)

                .build()

                .parseSignedClaims(token)

                .getPayload();

        return claims.get(
                "role",
                String.class
        );
    }

    public boolean validateToken(
            String token) {

        try {

            Jwts.parser()

                .verifyWith(key)

                .build()

                .parseSignedClaims(token);

            return true;

        } catch (Exception e) {

            return false;
        }
    }
}
