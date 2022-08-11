package com.example.fisalu.entities;

import com.example.fisalu.enums.IncomeCategoryEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "incomes")
@SQLDelete(sql = "UPDATE incomes SET deleted = true WHERE id=?")
@Where(clause = "deleted = false")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Income implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "{field.not.null}")
    @Min(value = 0, message = "{amount.negative}")
    @Column(name = "amount")
    private Double amount;

    @NotNull(message = "{field.not.null}")
    @Column(name = "date")
    private LocalDate date;

    @NotBlank(message = "{field.not.null}")
    @Column(name = "description")
    private String description;

    private IncomeCategoryEnum incomeCategory;

    //TODO: relacionar con cliente/usuario la relacion tiene que ser de uno a muchos

    @Column(name = "deleted")
    private boolean deleted = Boolean.FALSE;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDate createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDate updatedAt;

}
