package com.example.fisalu.controllers;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.services.IncomeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/incomes")
@Api(tags = "Incomes")
public class IncomeController {

    @Autowired
    private IncomeService incomeService;

    @PostMapping
    @ApiOperation(value = "Post new income", notes = "Add a new income")
    @ApiResponses({
            @ApiResponse(code = 201, message = "New income was save"),
            @ApiResponse(code = 400, message = "Bad request - Must complete all mandatory fields")
    })
    public ResponseEntity<IncomeDto> saveIncome(@Valid @RequestBody IncomeDto incomeDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(incomeService.saveIncome(incomeDto));
    }

    @GetMapping
    @ApiOperation(value = "List incomes", notes = "Returns incomes" )
    public ResponseEntity<List<IncomeDto>> getAllIncomes() {
        return ResponseEntity.ok().body(incomeService.getAll());
    }

    @GetMapping("/id={id}")
    @ApiOperation(value = "Get income by id", notes = "A particular income is returned")
    public ResponseEntity<IncomeDto> getIncomeById(@PathVariable("id") Long id) {
        IncomeDto result = incomeService.findIncomeById(id);
        return ResponseEntity.ok(result);
    }

    @PatchMapping("/id={id}")
    public ResponseEntity<IncomeDto> updateIncome(@PathVariable("id") Long id,@RequestBody IncomeDto incomeDto ){
        return ResponseEntity.ok(incomeService.updateIncome(id,incomeDto));
    }

    @DeleteMapping("/id={id}")
    public ResponseEntity<String> deleteIncome(@PathVariable("id") Long id){
        incomeService.deleteIncome(id);
        return ResponseEntity.noContent().build();
    }
}
