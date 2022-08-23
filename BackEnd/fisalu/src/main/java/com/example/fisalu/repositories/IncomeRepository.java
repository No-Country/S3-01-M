package com.example.fisalu.repositories;

import com.example.fisalu.auth.entity.User;
import com.example.fisalu.entities.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {

    List<Income> findAllByUser(User user);
}
