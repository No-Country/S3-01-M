package com.example.fisalu.auth.controller;

import com.example.fisalu.auth.dto.AuthenticationRequest;
import com.example.fisalu.auth.dto.AuthenticationResponse;
import com.example.fisalu.auth.entity.Role;
import com.example.fisalu.auth.entity.User;
import com.example.fisalu.auth.service.JwtUserDetailsService;
import com.example.fisalu.auth.service.impl.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
@Slf4j
public class UserController {
    
    @Autowired
    UserServiceImpl userServiceImpl;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest authReq) throws Exception {
        return ResponseEntity.ok(userDetailsService.login(authReq));
    }
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        return ResponseEntity.ok(userDetailsService.register(user));
    }

    @GetMapping("/all")
    public List<User> all(){
        return userServiceImpl.findAll();
    }

    @GetMapping("/find{id}")
    public ResponseEntity<User> find(@RequestParam Long id){
        User u = userServiceImpl.findById(id);

        if (u != null) {
            return ResponseEntity.ok(u);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/find-by-email{email}")
    public ResponseEntity<User> findByEmail(@RequestParam String email){
        User u = userServiceImpl.findByEmail(email);

        if (u != null) {
            return ResponseEntity.ok(u);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/save")
    public ResponseEntity<User> save(@Valid @RequestBody User user) {
        try {
            User u = userServiceImpl.save(user);
            return ResponseEntity.ok(u);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        
    }

    @PutMapping("/update{id}")
    public ResponseEntity<User> update(@RequestParam Long id, @RequestBody User user){
        try {
            User u = userServiceImpl.update(user, id);
            return ResponseEntity.ok(u);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
    
    @DeleteMapping("/delete{id}")
    public ResponseEntity<String> delete(@RequestParam Long id){
        userServiceImpl.delete(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/new-admin")
    public ResponseEntity<String> newAdmin(User user){
        try {
            User u = userServiceImpl.save(user);
            u.setRole(Role.ADMIN);
            userServiceImpl.update(u, u.getId());

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
    }
    }

}
