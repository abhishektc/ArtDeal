package com.artdeal.mongodb.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.artdeal.mongodb.api.model.Artist;

public interface ArtistRepository extends MongoRepository<Artist, String>{
	
	List<Artist> findByIsportrait(String isportrait, Sort sort);
	
	List<Artist> findByIswallpainter(String iswallpainter, Sort sort);
	
	Optional<Artist> findByUsername(String username);
	
	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	Boolean existsByUsernameAndAccStatus(String username,String accStatus);
	
}
