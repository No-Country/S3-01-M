package com.example.fisalu.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fisalu.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
