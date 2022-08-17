package com.example.fisalu.mappers;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.entities.Income;
import com.example.fisalu.enums.IncomeCategoryEnum;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Component
public class IncomeMapper {

    public Income incomeDto2IncomeEntity(IncomeDto dto) {
        Income entity = new Income();
        if (dto.getDescription() != null)
            entity.setDescription(dto.getDescription());
        if (dto.getDate() != null)
            entity.setDate(LocalDate.parse(dto.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        if (dto.getAmount() != null)
            entity.setAmount(dto.getAmount());
        if (dto.getName() != null)
            entity.setName(dto.getName());
        if (dto.getIncomeCategory() != null)
            entity.setIncomeCategory(IncomeCategoryEnum.valueOf(dto.getIncomeCategory().toUpperCase()));
        return entity;
    }

    public IncomeDto incomeEntity2Dto(Income entity) {
        return IncomeDto.builder()
                .id(entity.getId())
                .date(entity.getDate().toString())
                .description(entity.getDescription())
                .amount(entity.getAmount())
                .name(entity.getName())
                .incomeCategory(entity.getIncomeCategory().toString())
                .build();
    }

    public List<IncomeDto> incomeList2IncomeDtoList(List<Income> incomes) {
        List<IncomeDto> incomeDtos = new ArrayList<>();
        incomes.forEach(income -> {
            incomeDtos.add(this.incomeEntity2Dto(income));
        });
        return incomeDtos;
    }
}
