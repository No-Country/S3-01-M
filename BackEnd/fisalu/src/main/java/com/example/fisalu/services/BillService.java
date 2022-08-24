package com.example.fisalu.services;

import java.util.List;

import com.example.fisalu.entities.Bill;
import com.example.fisalu.enums.BillCategory;
public interface BillService {

    public Bill save(Bill bill);

    public Bill update(Bill bill, Long id);

    public void delete(Long id);

    // public Bill alta(long id);

    // public List<Bill> findAll();

    public List<Bill> findAllByUser();

    public Bill findByID(Long id);

    public List<Bill> findByCategory(BillCategory category);

    public boolean existsById(Long id);

    public Bill findByName(String name);
}
