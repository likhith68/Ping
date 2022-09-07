package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.PostDto;
import com.example.demo.exceptions.PostNotFoundException;
import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.model.Posts;
import com.example.demo.repository.PostDao;
import com.example.demo.repository.UserDao;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
public class PostService {

    @Autowired
    private AuthService authService;
    @Autowired
    private PostDao postRepository;
    @Autowired
    private UserDao dao;
    @Autowired
    private AuthenticationResponse authResp;

    @Transactional
    public List<PostDto> showAllPostsReverse() {
        List<Posts> posts = postRepository.findAll();
//        return posts.stream().map(this::mapFromPostToDto).collect(toList());

        List<PostDto> reversePosts= posts.stream().map(this::mapFromPostToDto).collect(toList());
        Collections.reverse(reversePosts);
        return reversePosts;
    }
    
    @Transactional
    public List<PostDto> showAllPosts() {
        List<Posts> posts = postRepository.findAll();
        return posts.stream().map(this::mapFromPostToDto).collect(toList());
    }
    
    @Transactional
    public List<PostDto> showPostsOfUser(String username) {
    	 List<Posts> posts = postRepository.findAllByUsername(username);
//         return posts.stream().map(this::mapFromPostToDto).collect(toList());
    	 List<PostDto> reversePosts= posts.stream().map(this::mapFromPostToDto).collect(toList());
         Collections.reverse(reversePosts);
         return reversePosts;
    }

    @Transactional
    public void createPost(PostDto postDto) {
        Posts post = mapFromDtoToPost(postDto);
        postRepository.save(post);
    }

    @Transactional
    public PostDto readSinglePost(Long id) {
        Posts post = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException("For id " + id));
        return mapFromPostToDto(post);
    }
    
    

    //used for retreiving data, ie for get functions
    private PostDto mapFromPostToDto(Posts post) {
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
//        postDto.setEmail(post.getEmail());
        postDto.setUsername(post.getUsername());
//        postDto.setUserImage(post.getUserImage());
        postDto.setDescription(post.getDescription());
        postDto.setPostImage(post.getPostImage());
        return postDto;
    }

    
    //setting values for post using another post Data transfer Object
    private Posts mapFromDtoToPost(PostDto postDto) {
        Posts post = new Posts();
        post.setId(postDto.getId());
//        post.setEmail(postDto.getEmail());
        User loggedInUser = authService.getCurrentUser().orElseThrow(() -> new IllegalArgumentException("User Not Found"));
        post.setCreatedOn(Instant.now());
        post.setUsername(loggedInUser.getUsername());
//        post.setUsername(postDto.getUser().getUsername());
//        System.out.print("username:"+postDto.getUser().getUsername());
        post.setUpdatedOn(Instant.now());
//        post.setUser
//        post.setEmail(loggedInUser.getEmail());
        post.setDescription(postDto.getDescription());
        post.setPostImage(postDto.getPostImage());
        post.setUser(postDto.getUser());
        System.out.print("User object:"+postDto.getUser());
        return post;
    }
    
    
    
    public void DeletePost(Long postId) {
    	Posts post1 =postRepository.findById(postId)
		           .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: "+ postId));
    	postRepository.delete(post1);
	}
    
//    private Long fetchId() {
//    	Long id=null;
//    	User loggedInUser = authService.getCurrentUser().orElseThrow(() -> new IllegalArgumentException("User Not Found"));
//
//    	List<com.example.demo.model.User> ListOfUsers=dao.findAll();
//        for(com.example.demo.model.User currentUser:ListOfUsers) {
//        	if(currentUser.getUsername()==loggedInUser.getUsername()) {
//        		id = currentUser.getId();
//        	}
//        }
//        return id;
//    }
}