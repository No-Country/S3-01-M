package com.example.fisalu.services;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.entities.Income;
import com.example.fisalu.mappers.IncomeMapper;
import com.example.fisalu.repositories.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class IncomeServiceImpl implements IncomeService{

    @Autowired
    private IncomeMapper incomeMapper;
    @Autowired
    private IncomeRepository incomeRepository;

    @Override
    @Transactional
    public IncomeDto saveIncome(IncomeDto dto) {
        Income income = incomeMapper.incomeDto2IncomeEntity(dto);
        income = incomeRepository.save(income);
        return incomeMapper.incomeEntity2Dto(income);
    }
}
