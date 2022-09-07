package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserDao;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserDao dao;
	
	@Autowired
	private UserService service;
	
	@GetMapping("/userdetails/{name}")
    @CrossOrigin("http://localhost:4200")
    public Optional<User> getDetails(@PathVariable @RequestBody String name) {
    	return dao.findByUsername(name);
    }
	
	@GetMapping("/allusers")
    @CrossOrigin("http://localhost:4200")
    public List<User> getAllUsers() {
    	return dao.findAll();
    }
	
    
    @PutMapping("/editdetails")
	@CrossOrigin("http://localhost:4200")
    public String EditDetails(@RequestBody User user) {
    	return service.updateUser(user);
    	
//		return dao.saveAll(user);    
    }
    
    @DeleteMapping("/deleteuser/{id}")
    public String deleteUser(@PathVariable(value = "id") Long userId) throws Exception {
        service.DeleteUser(userId);
        return "Deleted User";
    }
}
