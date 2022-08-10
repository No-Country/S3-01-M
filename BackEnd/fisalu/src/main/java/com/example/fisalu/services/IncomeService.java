package com.example.fisalu.services;

import com.example.fisalu.dtos.IncomeDto;

import java.util.List;

public interface IncomeService {
    IncomeDto saveIncome(IncomeDto dto);
    List<IncomeDto> getAll();
    IncomeDto findIncomeById(Long id);

    IncomeDto updateIncome(Long id, IncomeDto dto);
}
