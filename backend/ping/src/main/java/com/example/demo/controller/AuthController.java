package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.RegisterDto;
import com.example.demo.model.User;
import com.example.demo.repository.UserDao;
import com.example.demo.service.AuthService;
import com.example.demo.service.AuthenticationResponse;

@RestController
@RequestMapping("/users")
public class AuthController {
	@Autowired
	AuthService service;
	
	@PostMapping("/signup")
	@CrossOrigin("http://localhost:4200")
	public String signup(@RequestBody RegisterDto registerDto) {
		service.signup(registerDto);
//		return new ResponseEntity<>("User Registration Successfull",HttpStatus.OK);
		return "Registered Successfully";
	}
	
	@PostMapping("/login")
	@CrossOrigin("http://localhost:4200")
	public AuthenticationResponse Login(@RequestBody LoginDto loginDto) {
		return service.login(loginDto);
	}
}
