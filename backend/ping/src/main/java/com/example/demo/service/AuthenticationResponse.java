package com.example.demo.service;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Service
public class AuthenticationResponse {
	private String authenticationToken;
	private String username;
	private Long userId;
//	private String userImage;
//	private String email;
}
