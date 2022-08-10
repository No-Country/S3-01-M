package com.example.fisalu.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.fisalu.entities.Categoria;
import com.example.fisalu.entities.Gasto;

@Repository
public interface GastoRepository extends JpaRepository<Gasto, Long>{

    @Query("SELECT g FROM Gasto g WHERE g.categoria = :categoria AND g.eliminado = false")
    public List<Gasto> buscarPorCategoria(@Param("categoria") Categoria categoria);

    @Query("SELECT g FROM Gasto g WHERE g.nombre = :nombre AND g.eliminado = false")
    public Gasto buscarPorNombre(@Param("nombre") String nombre);

    @Query("SELECT g FROM Gasto g WHERE g.eliminado = false")
    public List<Gasto> findAll();

}
