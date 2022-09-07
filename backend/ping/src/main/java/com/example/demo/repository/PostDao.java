package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Posts;
import com.example.demo.model.User;

public interface PostDao extends JpaRepository<Posts, Long> {
	List<Posts> findAllByUsername(String username);

}
