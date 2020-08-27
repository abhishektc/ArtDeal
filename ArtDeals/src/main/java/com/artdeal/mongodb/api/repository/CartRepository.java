package com.artdeal.mongodb.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.artdeal.mongodb.api.model.Cart;

public interface CartRepository extends MongoRepository<Cart, String> {

	Boolean existsByUseridAndPaintingsid(String userid,String paintingsid);

	List<Cart> findByUserid(String userid);
}
