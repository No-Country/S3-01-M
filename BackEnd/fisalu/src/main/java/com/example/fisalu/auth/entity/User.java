package com.example.fisalu.auth.entity;

import com.example.fisalu.entities.Bill;
import com.example.fisalu.entities.Income;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@SQLDelete(sql = "UPDATE user SET active = false WHERE id=?")
@Where(clause = "active = true")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(value = AccessLevel.NONE)
    private Long id;

    @NotBlank(message = "{field.not.null}")
    @Email
    private String email;

    @NotBlank(message = "{field.not.null}")
    private String password;

    private String firstName;

    private String LastName;

    @OneToMany
    private List<Bill> bills;

    @OneToMany(mappedBy = "usuario", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Income> incomes;

    private Role role;

    private Boolean active = Boolean.TRUE;

}
