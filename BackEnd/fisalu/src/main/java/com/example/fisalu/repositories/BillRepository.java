package com.example.fisalu.repositories;

import com.example.fisalu.entities.Bill;
import com.example.fisalu.enums.BillCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long>{

    @Query("SELECT b FROM Bill b WHERE b.billCategory = :category AND b.deleted = false")
    public List<Bill> findByCategory(@Param("category") BillCategory category);

    @Query("SELECT b FROM Bill b WHERE b.name = :name AND b.deleted = false")
    public Bill findByName(@Param("name") String name);

    @Query("SELECT b FROM Bill b WHERE b.deleted = false")
    public List<Bill> findAll();

}
