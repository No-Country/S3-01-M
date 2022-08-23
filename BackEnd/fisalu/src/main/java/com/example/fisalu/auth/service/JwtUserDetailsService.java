package com.example.fisalu.auth.service;

import com.example.fisalu.auth.dto.AuthenticationRequest;
import com.example.fisalu.auth.dto.AuthenticationResponse;
import com.example.fisalu.auth.entity.Role;
import com.example.fisalu.auth.entity.User;
import com.example.fisalu.auth.repository.UserRepository;
import com.example.fisalu.auth.utils.jwt.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@Slf4j
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                Collections.singleton(getAuthority(user)));
    }

    public User register(User user){
        log.info(user.getPassword());
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setRole(Role.USER);
        newUser = userRepository.save(newUser);
        return newUser;
    }

    private SimpleGrantedAuthority getAuthority(User user) {
        return new SimpleGrantedAuthority(user.getRole().name());
    }


    public AuthenticationResponse login(AuthenticationRequest authReq) throws Exception {
        UserDetails userDetails;
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authReq.getUsername(), authReq.getPassword())
            );
            userDetails = (UserDetails) auth.getPrincipal();
            AuthenticationResponse jwt = jwtTokenUtil.generateToken(userDetails);
            return jwt;
        }catch (BadCredentialsException e){
            throw new Exception("BAD_CREDENTIALS", e);
        }
    }


}
