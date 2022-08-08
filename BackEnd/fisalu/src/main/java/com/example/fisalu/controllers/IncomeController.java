package com.example.fisalu.controllers;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/incomes")
public class IncomeController {

    @Autowired
    private IncomeService incomeService;

    @PostMapping
    public ResponseEntity<IncomeDto> saveIncome(@RequestBody IncomeDto incomeDto){
        return ResponseEntity.ok().body(incomeService.saveIncome(incomeDto));
    }
}
