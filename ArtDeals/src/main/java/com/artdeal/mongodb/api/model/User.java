package com.artdeal.mongodb.api.model;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {
	
	  @Id
	  private String id;
	  
	  @NotBlank
	  @Size(max = 20)
	  private String username;
	  
	  @NotBlank
	  @Size(max = 20)
	  private String fullname;
	  
	  @NotBlank
	  @Size(max = 50)
	  @Email
	  private String email;
	  
	  private long contact;
	  
	  @NotBlank
	  @Size(max = 50)
	  private String address;
	  
	  @NotBlank
	  @Size(max = 20)
	  private String city;
	  
	  @NotBlank
	  @Size(max = 120)
	  private String password; 

	  @DBRef
	  private Set<Role> roles = new HashSet<>();

	  public User() {
	  }

	  public User(String username, String fullname, String email, long contact, String address, String city, String password) {
	    this.username = username;
	    this.fullname = fullname;
	    this.email = email;
	    this.contact = contact;
	    this.address = address;
	    this.city = city;
	    this.password = password;
	  }

	  public String getId() {
	    return id;
	  }

	  public void setId(String id) {
	    this.id = id;
	  }

	  public String getUsername() {
	    return username;
	  }

	  public void setUsername(String username) {
	    this.username = username;
	  }
	  
	  public String getFullname() {
		return fullname;
	  }

	  public void setFullname(String fullname) {
		 this.fullname = fullname;
	  }

	  public String getEmail() {
	    return email;
	  }

	  public void setEmail(String email) {
	    this.email = email;
	  }
	 
	  public long getContact() {
		return contact;
	  }

	  public void setContact(long contact) {
		this.contact = contact;
	  }
	  
	  public String getAddress() {
		return address;
	  }

	  public void setAddress(String address) {
		this.address = address;
	  }

	  public void setCity(String city) {
	    this.city = city;
	  }
	  
	  public String getCity() {
		return city;
	  }

	  public String getPassword() {
	    return password;
	  }

	  public void setPassword(String password) {
	    this.password = password;
	  }

	  public Set<Role> getRoles() {
	    return roles;
	  }

	  public void setRoles(Set<Role> roles) {
	    this.roles = roles;
	  }

}
