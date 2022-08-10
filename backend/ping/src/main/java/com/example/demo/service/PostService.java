package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.PostDto;
import com.example.demo.exceptions.PostNotFoundException;
import com.example.demo.model.Posts;
import com.example.demo.repository.PostDao;

import java.time.Instant;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class PostService {

    @Autowired
    private AuthService authService;
    @Autowired
    private PostDao postRepository;

    @Transactional
    public List<PostDto> showAllPosts() {
        List<Posts> posts = postRepository.findAll();
        return posts.stream().map(this::mapFromPostToDto).collect(toList());
    }

    @Transactional
    public void createPost(PostDto postDto) {
        Posts post = mapFromDtoToPost(postDto);
        postRepository.save(post);
    }

    @Transactionave
    public PostDto readSinglePost(Long id) {
        Posts post = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException("For id " + id));
        return mapFromPostToDto(post);
    }

    //used for retreiving data, ie for get functions
    private PostDto mapFromPostToDto(Posts post) {
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setEmail(post.getEmail());
        postDto.setUsername(post.getUsername());
        postDto.setUserImage(post.getUserImage());
        postDto.setDescription(post.getDescription());
        postDto.setPostImage(post.getPostImage());
        return postDto;
    }

    
    //setting values for post using another post Data transfer Object
    private Posts mapFromDtoToPost(PostDto postDto) {
        Posts post = new Posts();
        post.setId(postDto.getId());
        post.setEmail(postDto.getEmail());
        User loggedInUser = authService.getCurrentUser().orElseThrow(() -> new IllegalArgumentException("User Not Found"));
        post.setCreatedOn(Instant.now());
        post.setUsername(loggedInUser.getUsername());
        post.setUpdatedOn(Instant.now());
//        post.setUserImage(loggedInUser.getUserImage());
//        post.setEmail(loggedInUser.getEmail());
        post.setDescription(postDto.getDescription());
        post.setPostImage(postDto.getPostImage());

        return post;
    }
}