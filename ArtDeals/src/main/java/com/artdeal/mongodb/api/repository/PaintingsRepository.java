package com.artdeal.mongodb.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.artdeal.mongodb.api.model.Paintings;

public interface PaintingsRepository extends MongoRepository<Paintings, String>{

	List<Paintings> findByStatus(String status);
	
//	List<Paintings> findByArtistidAndStatus(String artistid,String status);

	List<Paintings> findByArtistid(String artistid);

	List<Paintings> findFirst8ByStatus(String status);
	
	Paintings[] findFirst2ByArtistidAndStatus(String artistid, String status);

	List<Paintings> findByArtistidAndStatus(String artistid, String status);
}
