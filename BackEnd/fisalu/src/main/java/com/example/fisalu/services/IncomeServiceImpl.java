package com.example.fisalu.services;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.entities.Income;
import com.example.fisalu.mappers.IncomeMapper;
import com.example.fisalu.repositories.IncomeRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class IncomeServiceImpl implements IncomeService{

    private static IncomeMapper incomeMapper;
    private static IncomeRepository incomeRepository;

    @Override
    @Transactional
    public IncomeDto saveIncome(IncomeDto dto) {
        Income income = incomeMapper.incomeDto2IncomeEntity(dto);
        income = incomeRepository.save(income);
        return incomeMapper.incomeEntity2Dto(income);
    }
}
