package com.example.fisalu.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IncomeDto {

    private Long id;
    @NotNull(message = "{field.not.null}")
    @Min(value = 0, message = "{amount.negative}")
    private Double amount;
    @NotNull(message = "{field.not.null}")
    private String date;
    @NotNull(message = "{field.not.null}")
    private String description;
    @NotNull(message = "{field.not.null}")
    private String incomeCategory;


}
