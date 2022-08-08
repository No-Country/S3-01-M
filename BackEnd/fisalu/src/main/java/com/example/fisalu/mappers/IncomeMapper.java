package com.example.fisalu.mappers;

import com.example.fisalu.dtos.IncomeDto;
import com.example.fisalu.entities.Income;
import org.springframework.stereotype.Component;

@Component
public class IncomeMapper {

    public Income incomeDto2IncomeEntity(IncomeDto dto){
        Income entity = new Income();
        entity.setDescription(dto.getDescription());
        entity.setDate(dto.getDate());
        entity.setMount(dto.getMount());
        return entity;
    }

    public IncomeDto incomeEntity2Dto(Income entity){
        return IncomeDto.builder()
                .date(entity.getDate())
                .description(entity.getDescription())
                .mount(entity.getMount())
                .build();
    }
}
