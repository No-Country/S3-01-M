package com.example.fisalu.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.fisalu.entities.Gasto;
import com.example.fisalu.services.GastoService;

@RestController("/api/gastos")
public class GastoController {
    
    @Autowired
    GastoService gastoService;

    @GetMapping("/todos")
    public List<Gasto> todos(){
        return gastoService.findAll();
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Gasto> nuevo(@RequestBody Gasto gasto){
        Gasto gNuevo = gastoService.save(gasto);
        if (gNuevo != null) {
            return ResponseEntity.ok(gNuevo);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PostMapping("/modificar")
    public ResponseEntity<Gasto> modificar(@RequestBody Gasto gasto){
        Gasto gModificado = gastoService.modificar(gasto, gasto.getId());

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PostMapping("/baja/{id}")
    public ResponseEntity<Gasto> baja(@PathVariable long id){
        Gasto gModificado = gastoService.baja(id);

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
    
    @PostMapping("/alta/{id}")
    public ResponseEntity<Gasto> alta(@PathVariable long id){
        Gasto gModificado = gastoService.alta(id);

        if (gModificado != null) {
            return ResponseEntity.ok(gModificado);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Gasto> buscar(@PathVariable long id){
        if (gastoService.existsById(id)) {
            return ResponseEntity.ok(gastoService.findByID(id));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/buscar/{nombre}")
    public ResponseEntity<Gasto> buscarPorNombre(@PathVariable String nombre){
        Gasto g = gastoService.findByNombre(nombre);
        if (g != null ) {
            return ResponseEntity.ok(g);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/listar-por-categoria/{categoria}")
    public List<Gasto> listarPorCategoria(@PathVariable String categoria){
        return gastoService.findByCategoria(categoria);
    }
}
