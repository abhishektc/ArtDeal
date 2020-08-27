package com.artdeal.mongodb.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.artdeal.mongodb.api.model.ERole;
import com.artdeal.mongodb.api.model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
	Optional<Role> findByName(ERole name);
	
}
