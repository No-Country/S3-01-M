package com.example.fisalu.services.impl;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.entities.Income;
import com.example.fisalu.exception.EmptyListException;
import com.example.fisalu.exception.EntityNotFoundException;
import com.example.fisalu.mappers.IncomeMapper;
import com.example.fisalu.repositories.IncomeRepository;
import com.example.fisalu.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Locale;

@Service
public class IncomeServiceImpl implements IncomeService {

    @Autowired
    private IncomeMapper incomeMapper;
    @Autowired
    private IncomeRepository incomeRepository;

    @Autowired
    private MessageSource message;

    @Override
    @Transactional
    public IncomeDto saveIncome(IncomeDto dto) {
        Income income = incomeMapper.incomeDto2IncomeEntity(dto);
        income = incomeRepository.save(income);
        return incomeMapper.incomeEntity2Dto(income);
    }

    @Override
    public List<IncomeDto> getAll() {
        List<IncomeDto> incomeDtos = incomeMapper.incomeList2IncomeDtoList(incomeRepository.findAll());
        if (incomeDtos.isEmpty()) {
            throw new EmptyListException(message.getMessage("empty.list", null, Locale.US));
        }
        return incomeDtos;
    }

    @Override
    public IncomeDto findIncomeById(Long id) {
        Income income = incomeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(
                "Income",
                "id",
                id
        ));
        return incomeMapper.incomeEntity2Dto(income);
    }

    @Override
    public IncomeDto updateIncome(Long id, IncomeDto dto) {
        Income newIncome = incomeMapper.incomeDto2IncomeEntity(dto);
        Income income = incomeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(
                "Income",
                "id",
                id
        ));
        if (newIncome.getDate() != null) income.setDate(newIncome.getDate());
        if (newIncome.getDescription() != null) income.setDescription(newIncome.getDescription());
        if (newIncome.getAmount() != null) income.setAmount(newIncome.getAmount());
        income = incomeRepository.save(income);
        return incomeMapper.incomeEntity2Dto(income);
    }

    @Override
    public void deleteIncome(Long id) {
        Income income = incomeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(
                "Income",
                "id",
                id
        ));
        incomeRepository.deleteById(id);
    }
}
