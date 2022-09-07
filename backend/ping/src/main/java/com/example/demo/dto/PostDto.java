package com.example.demo.dto;


import com.example.demo.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
	private Long id;
	private User user;
	private String username;
	private String email;
	private User userImage;
	private String description;
	private String postImage;
}
