package com.example.fisalu.services.impl;

import com.example.fisalu.auth.entity.User;
import com.example.fisalu.auth.repository.UserRepository;
import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.entities.Income;
import com.example.fisalu.exception.EmptyListException;
import com.example.fisalu.exception.EntityNotFoundException;
import com.example.fisalu.mappers.IncomeMapper;
import com.example.fisalu.repositories.IncomeRepository;
import com.example.fisalu.services.IncomeService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Locale;

@Service
@Log4j2
public class IncomeServiceImpl implements IncomeService {

    @Autowired
    private IncomeMapper incomeMapper;
    @Autowired
    private IncomeRepository incomeRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MessageSource message;

    @Override
    @Transactional
    public IncomeDto saveIncome(IncomeDto dto) {
        User user = getUser();
        Income income = incomeMapper.incomeDto2IncomeEntity(dto);
        income.setUser(user);
        income = incomeRepository.save(income);
        return incomeMapper.incomeEntity2Dto(income);
    }

    private User getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        User user = userRepository.findByEmail(currentPrincipalName);
        return user;
    }

    @Override
    public List<IncomeDto> getAll() {
        User user = getUser();
        List<IncomeDto> incomeDtos = incomeMapper.incomeList2IncomeDtoList(incomeRepository.findAllByUser(user));
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
        if (newIncome.getName() != null) income.setName(newIncome.getName());
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
