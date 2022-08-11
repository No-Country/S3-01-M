package com.example.fisalu.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fisalu.entities.Bill;
import com.example.fisalu.enums.BillCategory;
import com.example.fisalu.repositories.BillRepository;

@Service
@Transactional
public class BillService {
    
    @Autowired
    BillRepository billRepository;

    //---------Creacion--------------
    public Bill save(Bill bill){
        return billRepository.save(bill);
    }

    //---------Update--------------
    public Bill update(Bill bill, long id){
        if (billRepository.existsById(id)) {
            Bill g = billRepository.findById(id).get();
            
            g.setBillCategory(bill.getBillCategory());
            g.setDeleted(bill.getDeleted());
            g.setDate(bill.getDate());
            g.setAmount(bill.getAmount());
            g.setName(bill.getName());
            g.setDescription(bill.getDescription());

            return billRepository.save(g);
        } else {
            return null;
        }
    }


    //---------Delete--------------
    public Bill delete(long id){
        if (billRepository.existsById(id)) {
            Bill g = billRepository.findById(id).get();
            
            g.setDeleted(true);

            return billRepository.save(g);
        } else {
            return null;
        }
    }

    // public Bill alta(long id){
    //     if (billRepository.existsById(id)) {
    //         Bill g = billRepository.findById(id).get();
            
    //         g.setDeleted(false);

    //         return billRepository.save(g);
    //     } else {
    //         return null;
    //     }
    // }

    //---------Buscar--------------
    public List<Bill> findAll(){
        return billRepository.findAll();
    }

    public Bill findByID(long id){
        if (billRepository.existsById(id)) {
            return billRepository.findById(id).get();
        } else {
            return null;
        }
    }

    public List<Bill> findByCategory(BillCategory category){
        List<Bill> bills = billRepository.findByCategory(category);

        if (bills != null) {
            return bills;
        } else {
            return null;
        }
    }

    public boolean existsById(long id){
        return billRepository.existsById(id);
    }


    public Bill findByName(String name){
        return billRepository.findByName(name);
    }
}
