package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
	private Long id;
	private String username;
	private String email;
	private String userImage;
	private String description;
	private String postImage;
}
