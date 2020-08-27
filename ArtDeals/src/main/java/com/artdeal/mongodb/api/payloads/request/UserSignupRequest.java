package com.artdeal.mongodb.api.payloads.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserSignupRequest {
	@NotBlank
    @Size(min = 3, max = 20)
    private String username;
	
	@NotBlank
    @Size(min = 3, max = 20)
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
    
    private String roles;
    
    @NotBlank
    @Size(max = 40)
    private String password;
  
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getRoles() {
      return roles;
    }
    
    public void setRole(String roles) {
      this.roles = roles;
    }
}
