package com.example.fisalu.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
@Getter
@Setter
public class EntityNotFoundException extends RuntimeException {

    private static final Long SERIAL_VERSION_UID = 1L;

    private String resourceName;
    private String fieldName;
    private Long fieldValue;
    private String value;

    public EntityNotFoundException(String resourceName, String fieldName, Long fieldValue){
        super(String.format("%s not found with: %s = %s", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }
}
