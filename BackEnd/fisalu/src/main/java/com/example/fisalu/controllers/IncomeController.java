package com.example.fisalu.controllers;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/incomes")
public class IncomeController {

    @Autowired
    private IncomeService incomeService;

    @PostMapping
    public ResponseEntity<IncomeDto> saveIncome(@Valid @RequestBody IncomeDto incomeDto) {
        return ResponseEntity.ok().body(incomeService.saveIncome(incomeDto));
    }

    @GetMapping
    public ResponseEntity<List<IncomeDto>> getAllIncomes() {
        return ResponseEntity.ok().body(incomeService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<IncomeDto> getIncomeById(@PathVariable("id") Long id) {
        IncomeDto result = incomeService.findIncomeById(id);
        return ResponseEntity.ok(result);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<IncomeDto> updateIncome(@PathVariable("id") Long id,@RequestBody IncomeDto incomeDto ){
        return ResponseEntity.ok(incomeService.updateIncome(id,incomeDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteIncome(@PathVariable("id") Long id){
        incomeService.deleteIncome(id);
        return ResponseEntity.noContent().build();
    }
}
