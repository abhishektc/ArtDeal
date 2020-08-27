package com.artdeal.mongodb.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.artdeal.mongodb.api.model.Feedback;

public interface FeedbackRepository extends MongoRepository<Feedback, String>{

}
