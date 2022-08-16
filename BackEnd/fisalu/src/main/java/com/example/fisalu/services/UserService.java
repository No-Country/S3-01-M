package com.example.fisalu.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.fisalu.entities.User;
import com.example.fisalu.repositories.UserRepository;

@Service
@Transactional
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    public User save(User user){
        return userRepository.save(user);
    }

    public User update(User userModified, long id){
        if(userRepository.existsById(id)){

            User u = userRepository.findById(id).get();

            u.setEmail(userModified.getEmail());
            u.setPassword(userModified.getPassword());
            u.setActive(userModified.getActive());
            u.setBills(userModified.getBills());
            u.setIncomes(userModified.getIncomes());
            u.setFirstName(userModified.getFirstName());
            u.setLastName(userModified.getLastName());

            return userRepository.save(u);
        }else{
            return null;
        }
    }

    public void delete(Long id){
        userRepository.deleteById(id);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User findById(Long id){
        if (userRepository.existsById(id)) {
            return userRepository.findById(id).get();
        } else {
            return null;
        }
    }

}
