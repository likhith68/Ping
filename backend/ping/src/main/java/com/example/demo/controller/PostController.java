package com.example.demo.controller;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PostDto;
import com.example.demo.model.Posts;
import com.example.demo.model.User;
import com.example.demo.repository.PostDao;
import com.example.demo.repository.UserDao;
import com.example.demo.service.PostService;

@RestController
@RequestMapping("/posts")
public class PostController {
	@Autowired
	PostService service;
	
	@Autowired
	PostDao dao;
	
	@Autowired	
	UserDao udao;
	
	@PostMapping("/addpost")
	@CrossOrigin("http://localhost:4200")
    public ResponseEntity createPost(@RequestBody PostDto postDto) {
        service.createPost(postDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/all")
    @CrossOrigin("http://localhost:4200")
    public List<PostDto> showAllPosts() {
//        return new ResponseEntity<>(service.showAllPosts(), HttpStatus.OK);
    	return service.showAllPosts();
    }
    
    @GetMapping("/all/{username}")//all posts with specific user id
    @CrossOrigin("http://localhost:4200")
    public List<PostDto> showAllPosts(@PathVariable @RequestBody String username) {
//        return new ResponseEntity<>(service.showAllPosts(), HttpStatus.OK);
    	return service.showPostsOfUser(username);
    }
    
    @GetMapping("/allreverse")
    @CrossOrigin("http://localhost:4200")
    public List<PostDto> showAllPostsReverse() {
//        return new ResponseEntity<>(service.showAllPosts(), HttpStatus.OK);
    	return service.showAllPostsReverse();
    }

    @GetMapping("/get/{id}")//using postid
    @CrossOrigin("http://localhost:4200")
    public ResponseEntity<PostDto> getSinglePost(@PathVariable @RequestBody Long id) {
        return new ResponseEntity<>(service.readSinglePost(id), HttpStatus.OK);
    }
    
    @DeleteMapping("/deletepost/{id}")
    @CrossOrigin("http://localhost:4200")
    public String deleteUser(@PathVariable(value = "id") Long id) throws Exception {
        service.DeletePost(id);
        return "Deleted User";
    }
}
