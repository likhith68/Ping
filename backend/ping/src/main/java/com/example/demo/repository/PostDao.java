package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Posts;

public interface PostDao extends JpaRepository<Posts, Long> {

}
