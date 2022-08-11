package com.example.fisalu.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.fisalu.entities.Bill;
import com.example.fisalu.enums.BillCategory;
import com.example.fisalu.services.BillService;

@RestController
@RequestMapping("/bills")
public class BillController {
    
    @Autowired
    BillService billService;

    @GetMapping("/all")
    public List<Bill> all(){
        return billService.findAll();
    }

    @PostMapping
    public ResponseEntity<Bill> saveBill(@RequestBody Bill bill){
        Bill bNew = billService.save(bill);
        if (bNew != null) {
            return ResponseEntity.ok(bNew);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PutMapping("/update{id}")
    public ResponseEntity<Bill> update(@RequestBody Bill bill, @RequestParam long id){
        Bill gModificado = billService.update(bill, id);

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PutMapping("/delete{id}")
    public ResponseEntity<Bill> delete(@RequestParam long id){
        Bill gModificado = billService.delete(id);

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
    
    // @PutMapping("/bills/alta{id}")
    // public ResponseEntity<Bill> alta(@RequestParam long id){
    //     Bill gModificado = billService.alta(id);

    //     if (gModificado != null) {
    //         return ResponseEntity.ok(gModificado);
    //     } else {
    //         return ResponseEntity.status(HttpStatus.CONFLICT).build();
    //     }
    // }

    @GetMapping("/find{id}")
    public ResponseEntity<Bill> find(@RequestParam long id){
        if (billService.existsById(id)) {
            return ResponseEntity.ok(billService.findByID(id));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/find-by-name{name}")
    public ResponseEntity<Bill> findByName(@RequestParam String name){
        Bill g = billService.findByName(name);
        if (g != null ) {
            return ResponseEntity.ok(g);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/category{category}")
    public List<Bill> listarPorCategory(@RequestParam String category){
        return billService.findByCategory(BillCategory.valueOf(category.toUpperCase()));
    }
}
