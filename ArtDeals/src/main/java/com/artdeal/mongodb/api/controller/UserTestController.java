package com.artdeal.mongodb.api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.artdeal.mongodb.api.repository.ArtistRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class UserTestController {
	
	@Autowired
	ArtistRepository artistRepository;
	
	@GetMapping("/all")
	public String allAccess() {
		return "Public";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER')")
	public String userAccess() {
		return "User Content.";
	}
	
	@GetMapping("/artist")
	@PreAuthorize("hasRole('ARTIST')")
	public String moderatorAccess() {
		return "Artist Board.";
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}

}
