package com.example.fisalu.auth.dto;

import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AuthenticationRequest implements Serializable {
    private static final long serialVersionUID = 4735266196076048961L;
    private String username;
    private String password;
}
