package com.artdeal.mongodb.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.artdeal.mongodb.api.model.Admin;

public interface AdminRepository extends MongoRepository<Admin, String>{
	Optional<Admin> findByUsername(String username);
	
	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
