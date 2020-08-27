package com.artdeal.mongodb.api.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artdeal.mongodb.api.model.Artist;
import com.artdeal.mongodb.api.repository.ArtistRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserModuleController {

	@Autowired
	ServletContext context;
	
	@Autowired
	ArtistRepository artistRepository;
	
	@GetMapping("/artistlist")
	public List<Artist> artistList() {
		return artistRepository.findAll(Sort.by(Sort.Direction.DESC, "rankReview"));
	}
	
	@GetMapping("/artistPortraitlist")
	public List<Artist> artistPortraitList() {
		return artistRepository.findByIsportrait("true", Sort.by(Sort.Direction.DESC, "rankReview"));
	}
	
	@GetMapping("/artistWallpainterlist")
	public List<Artist> artistWallList() {
		return artistRepository.findByIswallpainter("true", Sort.by(Sort.Direction.DESC, "rankReview"));
	}
	
	@GetMapping("/getArtistById/{id}")
	public Optional<Artist> getArtistById(@PathVariable(value = "id") String artistid) {
		return artistRepository.findById(artistid);
	}
	
}
