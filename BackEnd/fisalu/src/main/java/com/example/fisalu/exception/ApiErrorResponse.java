package com.example.fisalu.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class ApiErrorResponse<T> {
    private HttpStatus httpStatus;
    private T errors;
}
