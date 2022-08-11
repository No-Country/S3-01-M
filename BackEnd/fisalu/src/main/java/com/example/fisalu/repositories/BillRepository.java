package com.example.fisalu.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.fisalu.enums.BillCategory;
import com.example.fisalu.entities.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long>{

    @Query("SELECT b FROM Bill b WHERE b.billCategory = :category AND b.eliminated = false")
    public List<Bill> findByCategory(@Param("category") BillCategory category);

    @Query("SELECT b FROM Bill b WHERE b.name = :name AND g.eliminated = false")
    public Bill findByName(@Param("name") String name);

    @Query("SELECT b FROM Bill b WHERE b.eliminated = false")
    public List<Bill> findAll();

}
