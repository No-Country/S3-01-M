package com.example.fisalu.auth.controller;

import com.example.fisalu.auth.entity.User;
import com.example.fisalu.auth.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    UserServiceImpl userServiceImpl;

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
        User u = userServiceImpl.save(user);

        if (u != null) {
            return ResponseEntity.ok(u);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PutMapping("/update{id}")
    public ResponseEntity<User> update(@RequestParam Long id, @RequestBody User user){

        User u = userServiceImpl.update(user, id);

        if (u != null) {
            return ResponseEntity.ok(u);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
    
    @DeleteMapping("/delete{id}")
    public ResponseEntity<String> delete(@RequestParam Long id){
        userServiceImpl.delete(id);
        return ResponseEntity.ok().build();
    }

}
