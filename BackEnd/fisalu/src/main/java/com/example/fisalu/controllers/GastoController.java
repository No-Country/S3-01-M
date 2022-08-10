package com.example.fisalu.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.fisalu.entities.Categoria;
import com.example.fisalu.entities.Gasto;
import com.example.fisalu.services.GastoService;

@RestController
public class GastoController {
    
    @Autowired
    GastoService gastoService;

    @GetMapping("/api/gastos/todos")
    public List<Gasto> todos(){
        return gastoService.findAll();
    }

    @PostMapping("/api/gastos/nuevo")
    public ResponseEntity<Gasto> nuevo(@RequestBody Gasto gasto){
        Gasto gNuevo = gastoService.save(gasto);
        if (gNuevo != null) {
            return ResponseEntity.ok(gNuevo);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PutMapping("/api/gastos/modificar{id}")
    public ResponseEntity<Gasto> modificar(@RequestBody Gasto gasto, @RequestParam long id){
        Gasto gModificado = gastoService.modificar(gasto, id);

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PutMapping("/api/gastos/baja{id}")
    public ResponseEntity<Gasto> baja(@RequestParam long id){
        Gasto gModificado = gastoService.baja(id);

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
    
    @PutMapping("/api/gastos/alta{id}")
    public ResponseEntity<Gasto> alta(@RequestParam long id){
        Gasto gModificado = gastoService.alta(id);

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping("/api/gastos/buscar{id}")
    public ResponseEntity<Gasto> buscar(@RequestParam long id){
        if (gastoService.existsById(id)) {
            return ResponseEntity.ok(gastoService.findByID(id));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/api/gastos/buscar-por-nombre{nombre}")
    public ResponseEntity<Gasto> buscarPorNombre(@RequestParam String nombre){
        Gasto g = gastoService.findByNombre(nombre);
        if (g != null ) {
            return ResponseEntity.ok(g);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/api/gastos/categoria{categoria}")
    public List<Gasto> listarPorCategoria(@RequestParam String categoria){
        return gastoService.findByCategoria(Categoria.valueOf(categoria.toUpperCase()));
    }
}
