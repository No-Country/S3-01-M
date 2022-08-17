package com.example.fisalu.dtos;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
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
@ApiModel()
public class IncomeDto {

    @ApiModelProperty(notes = "Income id", readOnly = true)
    private Long id;
    @NotNull(message = "{field.not.null}")
    @Min(value = 0, message = "{amount.negative}")
    @ApiModelProperty(notes = "Income amount", required = true)
    private Double amount;
    @NotNull(message = "{field.not.null}")
    @ApiModelProperty(notes = "Income name", required = true)
    private String name;
    @NotNull(message = "{field.not.null}")
    @ApiModelProperty(notes = "Income description", required = true)
    private String description;
    @NotNull(message = "{field.not.null}")
    @ApiModelProperty(notes = "Income date", required = true, example = "2022-08-31")
    private String date;
    @NotNull(message = "{field.not.null}")
    @ApiModelProperty(notes = "Income category", required = true)
    private String incomeCategory;


}
