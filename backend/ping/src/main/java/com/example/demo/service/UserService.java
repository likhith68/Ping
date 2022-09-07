package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserDao;

@Service
public class UserService {
	  
	@Autowired
	private UserDao dao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String updateUser(com.example.demo.model.User user) {
			boolean resourceFound=false;
			List<com.example.demo.model.User> ListOfUsers=dao.findAll();
			for(com.example.demo.model.User currentUser: ListOfUsers) {
				if(currentUser.getId()==user.getId()) {
					resourceFound=true;
//					currentUser.setId("1");
					currentUser.setUsername(user.getUsername());
					currentUser.setEmail(user.getEmail());
					currentUser.setPassword(passwordEncoder.encode(user.getPassword()));
					currentUser.setPhoneNumber(user.getPhoneNumber());
					currentUser.setUserImage(user.getUserImage());
					
					dao.save(currentUser);
				}
			}
			if(!resourceFound) {
				ListOfUsers.add(user);
				dao.save(user);
				return "User Added Successfully";
			}
			return "User Updated Successfully";
		}
	
	public void DeleteUser(Long userId) {
		User user1 =dao.findById(userId)
		           .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
		dao.delete(user1);
	}
}
