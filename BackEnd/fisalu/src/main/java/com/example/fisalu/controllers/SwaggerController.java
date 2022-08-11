package com.example.fisalu.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/docs")
public class SwaggerController {

    @GetMapping
    public ModelAndView swaggerPage(HttpServletResponse response) {
        ModelAndView  model = new ModelAndView("redirect:/swagger-ui.html");
        return model;
    }
}
