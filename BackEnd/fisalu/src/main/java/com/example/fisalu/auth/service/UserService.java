package com.example.fisalu.auth.service;

import com.example.fisalu.auth.entity.User;

import java.util.List;

public interface UserService {
    User save(User user);

    User update(User userModified, long id);

    void delete(Long id);

    List<User> findAll();
}
