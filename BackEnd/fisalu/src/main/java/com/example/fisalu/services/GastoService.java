package com.example.fisalu.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fisalu.entities.Categoria;
import com.example.fisalu.entities.Gasto;
import com.example.fisalu.repositories.GastoRepository;

@Service
@Transactional
public class GastoService {
    
    @Autowired
    GastoRepository gastoRepository;

    //---------Creacion--------------
    public Gasto save(Gasto gasto){
        return gastoRepository.save(gasto);
    }

    //---------Modificar--------------
    public Gasto modificar(Gasto gasto, long id){
        if (gastoRepository.existsById(id)) {
            Gasto g = gastoRepository.findById(id).get();
            
            g.setCategoria(gasto.getCategoria());
            g.setEliminado(gasto.getEliminado());
            g.setFecha(gasto.getFecha());
            g.setMonto(gasto.getMonto());
            g.setNombre(gasto.getNombre());
            g.setDescripcion(gasto.getDescripcion());

            return gastoRepository.save(g);
        } else {
            return null;
        }
    }


    //---------Alta/Baja--------------
    public Gasto baja(long id){
        if (gastoRepository.existsById(id)) {
            Gasto g = gastoRepository.findById(id).get();
            
            g.setEliminado(true);

            return gastoRepository.save(g);
        } else {
            return null;
        }
    }

    public Gasto alta(long id){
        if (gastoRepository.existsById(id)) {
            Gasto g = gastoRepository.findById(id).get();
            
            g.setEliminado(false);

            return gastoRepository.save(g);
        } else {
            return null;
        }
    }

    //---------Buscar--------------
    public List<Gasto> findAll(){
        return gastoRepository.findAll();
    }

    public Gasto findByID(long id){
        if (gastoRepository.existsById(id)) {
            return gastoRepository.findById(id).get();
        } else {
            return null;
        }
    }

    public List<Gasto> findByCategoria(Categoria categoria){
        List<Gasto> gastos = gastoRepository.buscarPorCategoria(categoria);

        if (gastos != null) {
            return gastos;
        } else {
            return null;
        }
    }

    public boolean existsById(long id){
        return gastoRepository.existsById(id);
    }


    public Gasto findByNombre(String nombre){
        return gastoRepository.buscarPorNombre(nombre);
    }
}
