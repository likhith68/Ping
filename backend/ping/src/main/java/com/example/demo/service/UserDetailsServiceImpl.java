package com.example.demo.service;

import java.util.Collection;
import java.util.Collections;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserDao;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserDao userRepository;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) {
		Optional<User> userOptional =userRepository.findByUsername(username);
		User user=userOptional.orElseThrow(()->new UsernameNotFoundException("No user Found with that username:"+username));
		return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),true,true,true,true,getAuthorities("USER_ROLE"));
	}
	//MayCause Error
	private Collection<? extends GrantedAuthority> getAuthorities(String role){
		return Collections.singletonList(new SimpleGrantedAuthority(role));
	}
}

