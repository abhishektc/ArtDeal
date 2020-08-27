package com.artdeal.mongodb.api.model;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

public class ArtistResponse {
	
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
	  @Size(max = 120)
	  private String password;
	  
	  @Size(max = 20)
	  private String isportrait;
	  
	  @Size(max = 20)
	  private String iswallpainter;
	
	  private String filename;
	  
	  private String filename1;
	  
	  private String profileimage;
	  
	  private float rankReview;
	  
	  private String description;
	  
	  private String acc_status;
	  
	  @DBRef
	  private Set<Role> roles = new HashSet<>();
	
	  public ArtistResponse() {
	  }
	  
	  public ArtistResponse( String username, String fullname, String email, long contact, String experience, String qualification, String website, String address, String city, String password,
			 String isportrait, String iswallpainter, String filename, String filename1) {
		this.username = username;
		this.fullname = fullname;
		this.email = email;
		this.contact = contact;
		this.experience = experience;
		this.qualification = qualification;
		this.website = website;
		this.address = address;
		this.city = city;
		this.password = password;
		this.isportrait = isportrait;
		this.iswallpainter = iswallpainter;
		this.filename = filename;
		this.filename1 = filename1;
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
	  
	  public String getFilename() {
		return filename;
	  }

	  public void setFilename(String filename) {
		this.filename = filename;
	  }

	  public String getFilename1() {
		return filename1;
	  }

	  public void setFilename1(String filename1) {
		this.filename1 = filename1;
	  }

	  public String getProfileimage() {
		return profileimage;
	  }

	  public void setProfileimage(String profileimage) {
		this.profileimage = profileimage;
	  }

	  public float getRankReview() {
		return rankReview;
	  }

	  public void setRankReview(float rankReview) {
		this.rankReview = rankReview;
	  }

	  public String getDescription() {
		return description;
	  }


	  public void setDescription(String description) {
		this.description = description;
	  }
	  
	  public String getAcc_status() {
		return acc_status;
	  }

	  public void setAcc_status(String acc_status) {
		this.acc_status = acc_status;
	  }

	  public Set<Role> getRoles() {
	    return roles;
	  }
	
	  public void setRoles(Set<Role> roles) {
	    this.roles = roles;
	  }
}
