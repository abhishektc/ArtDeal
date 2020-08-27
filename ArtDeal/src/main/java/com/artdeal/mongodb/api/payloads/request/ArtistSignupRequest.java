package com.artdeal.mongodb.api.payloads.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ArtistSignupRequest {

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
	  
	  @Size(max = 14)
	  private long contact;
	  
	  @NotBlank
	  @Size(max = 10)
	  private String experience;
	  
	  @NotBlank
	  @Size(max = 50)
	  private String qualification;
	
	  @Size(max = 100)
	  private String website;
	  
	  @NotBlank
	  @Size(max = 50)
	  private String address;
	  
	  @NotBlank
	  @Size(max = 20)
	  private String city;
	  
	  @NotBlank
	  @Size(max = 20)
	  private String password;
	  
	  @Size(max = 20)
	  private String isportrait;
	  
	  @Size(max = 20)
	  private String iswallpainter;
	
	  private String filename1;
	  
	  private String filename2;
	  
	  private String roles="artist";
	  
	  
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
	
	  public String getExperience() {
		 return experience;
	  }
	
	  public void setExperience(String experience) {
		 this.experience = experience;
	  }
	
	  public String getQualification() {
		return qualification;
	  }
	
	  public void setQualification(String qualification) {
		this.qualification = qualification;
	  }
	
	  public String getWebsite() {
		return website;
	  }
	
	  public void setWebsite(String website) {
		this.website = website;
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
	
	  public String getIsportrait() {
		return isportrait;
	  }
	
	  public void setIsportrait(String isportrait) {
		this.isportrait = isportrait;
	  }
	
	  public String getIswallpainter() {
		return iswallpainter;
	  }
	
	  public void setIswallpainter(String iswallpainter) {
		this.iswallpainter = iswallpainter;
	  }
	  
	  public String getFilename1() {
		return filename1;
	  }

	  public void setFilename1(String filename1) {
		this.filename1 = filename1;
	  }

	  public String getFilename2() {
		return filename2;
	  }

	  public void setFilename2(String filename2) {
		this.filename2 = filename2;
	  }
	
	  public String getRoles() {
		  return roles;
	  }
	    
	  public void setRole(String roles) {
		  this.roles = roles;
	  }
}
