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

    @NotNull(message = "{field.not.null}")
    @Min(value = 0, message = "{mount.negative}")
    private Double mount;
    @NotNull(message = "{field.not.null}")
    private String date;
    @NotNull(message = "{field.not.null}")
    private String description;
}
