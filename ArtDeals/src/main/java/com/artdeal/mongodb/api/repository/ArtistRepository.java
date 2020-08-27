package com.artdeal.mongodb.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.artdeal.mongodb.api.model.Artist;
import com.artdeal.mongodb.api.model.Paintings;

public interface ArtistRepository extends MongoRepository<Artist, String>{
	
	List<Artist> findByIsportraitAndAccStatus(String isportrait, String accStatus, Sort sort);
	
	List<Artist> findByIswallpainterAndAccStatus(String iswallpainter, String accStatus, Sort sort);
	
	List<Artist> findByAccStatus(String accStatus, Sort sort);
	
	Optional<Artist> findByUsername(String username);
	
	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	List<Artist> findByAccStatus(String accStatus);

	Artist[] findFirst4ByAccStatus(String accStatus, Sort sort);

	List<Artist> findFirst8ByAccStatus(String string, Sort sort);

}
