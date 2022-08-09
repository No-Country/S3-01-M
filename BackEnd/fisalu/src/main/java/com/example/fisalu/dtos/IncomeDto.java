package com.example.fisalu.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IncomeDto {

    @NotNull
    @Min(value = 0)
    private Double mount;
    @NotNull
    private String date;
    @NotBlank
    private String description;
}
