package com.artdeal.mongodb.api.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.artdeal.mongodb.api.model.PortraitWallTeach;

public interface PortraitWallTeachRepository extends MongoRepository<PortraitWallTeach, String>{

	List<PortraitWallTeach> findByArtistidAndPortrait(String artistid, String portrait, Sort sort);

	List<PortraitWallTeach> findByArtistidAndWallpaint(String artistid, String wallpaint, Sort sort);

	List<PortraitWallTeach> findByUserid(String userid, Sort sort);

	
}
