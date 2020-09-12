package com.deftshadow.schedyoule.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntimeException(RuntimeException exception) {
        Map<String, String> response = new HashMap<>();
        HttpStatus responseCode = HttpStatus.BAD_REQUEST;
        response.put("code", responseCode.toString());
        response.put("message", exception.getLocalizedMessage());
        return ResponseEntity.status(responseCode).body(response);
    }
}
