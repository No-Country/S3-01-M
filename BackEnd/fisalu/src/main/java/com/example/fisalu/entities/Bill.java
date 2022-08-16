package com.example.fisalu.entities;

import com.example.fisalu.enums.BillCategory;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Bill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(value = AccessLevel.NONE)
    private long id;

    @Enumerated
    @NonNull
    private BillCategory billCategory;

    @NonNull
    private String name;

    private String description;

    @NonNull
    private Double amount;

    @DateTimeFormat(style = "yyyy.MM.dd")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd")
    private LocalDate date;

    @NonNull
    private Boolean deleted = Boolean.FALSE;


}
