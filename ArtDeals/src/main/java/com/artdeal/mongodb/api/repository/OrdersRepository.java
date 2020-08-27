package com.artdeal.mongodb.api.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.mongodb.repository.MongoRepository;


import com.artdeal.mongodb.api.model.Orders;

public interface OrdersRepository extends MongoRepository<Orders, String>{

	List<Orders> findByUserid(String userid, Sort sort);

	Orders findById(Iterable<String> orderid);

	Orders[] findByArtistid(String artistid);

	Orders[] findByArtistidAndStatus(String artistid, String status);

	List<Orders> findByArtistid(String artistid, Sort sort);
	
	Orders[] findByUserid(String userid);

}
