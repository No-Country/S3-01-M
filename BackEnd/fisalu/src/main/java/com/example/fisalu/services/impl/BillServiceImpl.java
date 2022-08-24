package com.example.fisalu.services.impl;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.fisalu.auth.entity.User;
import com.example.fisalu.auth.repository.UserRepository;
import com.example.fisalu.entities.Bill;
import com.example.fisalu.enums.BillCategory;
import com.example.fisalu.repositories.BillRepository;
import com.example.fisalu.services.BillService;

@Service
@Transactional
public class BillServiceImpl implements BillService {

    @Autowired
    BillRepository billRepository;
    @Autowired
    UserRepository userRepository;

    private User getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        User user = userRepository.findByEmail(currentPrincipalName);
        return user;
    }

    // ---------Creacion--------------
    @Override
    public Bill save(Bill bill) {
        User user = getUser();

        List<Bill> bills = user.getBills();
        bills.add(bill);
        user.setBills(bills);

        bill.setUser(user);

        billRepository.save(bill);
        userRepository.save(user);

        return user.getBills().get(bills.size() - 1);
    }

    // ---------Update--------------
    @Override
    public Bill update(Bill bill, Long id) {
        try {
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
                throw new EntityNotFoundException();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // ---------Delete--------------
    @Override
    public void delete(Long id) {
        try {
            if (billRepository.existsById(id)) {
                Bill g = billRepository.findById(id).get();

                g.setDeleted(true);

                billRepository.save(g);
            } else {
                throw new EntityNotFoundException();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // @Override
    // public Bill alta(long id){
    // if (billRepository.existsById(id)) {
    // Bill g = billRepository.findById(id).get();

    // g.setDeleted(false);

    // return billRepository.save(g);
    // } else {
    // return null;
    // }
    // }

    // ---------Buscar--------------
    // @Override
    // public List<Bill> findAll(){
    // return billRepository.findAll();
    // }

    @Override
    public List<Bill> findAllByUser() {
        User user = getUser();
        return billRepository.findAllByUser(user.getId());
    }

    @Override
    public Bill findByID(Long id) {
        if (billRepository.existsById(id)) {
            return billRepository.findById(id).get();
        } else {
            return null;
        }
    }

    @Override
    public List<Bill> findByCategory(BillCategory category) {
        User user = getUser();
        List<Bill> bills = billRepository.findByCategory(category, user.getId());

        if (bills != null) {
            return bills;
        } else {
            return null;
        }
    }

    @Override
    public boolean existsById(Long id) {
        return billRepository.existsById(id);
    }

    @Override
    public Bill findByName(String name) {
        User user = getUser();
        return billRepository.findByName(name, user.getId());
    }
}
