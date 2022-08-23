package com.example.fisalu.auth.service.impl;

import com.example.fisalu.auth.dto.AuthenticationRequest;
import com.example.fisalu.auth.dto.AuthenticationResponse;
import com.example.fisalu.auth.entity.User;
import com.example.fisalu.auth.repository.UserRepository;
import com.example.fisalu.auth.service.UserService;
import com.example.fisalu.auth.utils.jwt.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;



    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User update(User userModified, long id) {
        if (userRepository.existsById(id)) {

            User u = userRepository.findById(id).get();

            u.setEmail(userModified.getEmail());
            u.setPassword(userModified.getPassword());
            u.setActive(userModified.getActive());
            u.setBills(userModified.getBills());
            //u.setIncomes(userModified.getIncomes());
            u.setFirstName(userModified.getFirstName());
            u.setLastName(userModified.getLastName());

            return userRepository.save(u);
        } else {
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        if (userRepository.existsById(id)) {
            return userRepository.findById(id).get();
        } else {
            return null;
        }
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }


}
