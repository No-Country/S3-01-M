package com.example.fisalu.exception.handler;

import com.example.fisalu.exception.ApiErrorResponse;
import com.example.fisalu.exception.EmptyListException;
import com.example.fisalu.exception.EntityNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class RestControllerExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request) {

        List<String> errors = new ArrayList<>();

        ex.getBindingResult().getFieldErrors().forEach(fieldError ->
                errors.add(fieldError.getField() + ": " + fieldError.getDefaultMessage()));

        ex.getBindingResult().getGlobalErrors().forEach(globalError -> {
            errors.add(globalError.getObjectName() + ": " + globalError.getDefaultMessage());
        });

        return handleExceptionInternal(
                ex,
                new ApiErrorResponse<>(
                        HttpStatus.BAD_REQUEST,
                        errors
                ),
                headers,
                status,
                request
        );
    }

    @ExceptionHandler(EmptyListException.class)
    public ResponseEntity<ApiErrorResponse<String>> handleEmptyListException(RuntimeException ex, WebRequest request){
        return new ResponseEntity<>(
                new ApiErrorResponse<>(
                        HttpStatus.OK,
                        ex.getMessage()
                ),
                HttpStatus.OK
        );
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ApiErrorResponse<String>> handleEntityNotFoundException(EntityNotFoundException ex) {
        return new ResponseEntity<>(
                new ApiErrorResponse<>(
                        HttpStatus.NOT_FOUND,
                        ex.getMessage()
                ),
                HttpStatus.NOT_FOUND
        );
    }
}
