package com.example.fisalu.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

@Getter
@AllArgsConstructor
public class AuthenticationResponse implements Serializable {
    private static final long serialVersionUID = -1472361071283673384L;
    private final String jwtToken;
}
