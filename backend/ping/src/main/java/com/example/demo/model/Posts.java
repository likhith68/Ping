package com.example.demo.model;

import java.time.Instant;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Posts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
//	@JoinColumn(name="userName",referencedColumnName = "username")
	private String username;
//	@Column
//	private String userImage;
	@Column
	private String Description;
//	@Column
//	private String email;
	@Column
	private String postImage;
	@Column
	private Instant createdOn;
	@Column
	private Instant updatedOn;
//	@ManyToOne
//	private User user;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="user_ID",referencedColumnName = "id")
	private User user;
	
}
