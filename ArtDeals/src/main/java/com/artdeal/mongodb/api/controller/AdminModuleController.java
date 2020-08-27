package com.artdeal.mongodb.api.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artdeal.mongodb.api.model.Artist;
import com.artdeal.mongodb.api.model.Cart;
import com.artdeal.mongodb.api.model.Feedback;
import com.artdeal.mongodb.api.model.Orders;
import com.artdeal.mongodb.api.model.Paintings;
import com.artdeal.mongodb.api.model.User;
import com.artdeal.mongodb.api.repository.ArtistRepository;
import com.artdeal.mongodb.api.repository.CartRepository;
import com.artdeal.mongodb.api.repository.FeedbackRepository;
import com.artdeal.mongodb.api.repository.OrdersRepository;
import com.artdeal.mongodb.api.repository.PaintingsRepository;
import com.artdeal.mongodb.api.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
public class AdminModuleController {
	
	@Autowired
	ArtistRepository artistRepository;
	
	@Autowired
	PaintingsRepository paintingsRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	OrdersRepository orderRepository;
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	FeedbackRepository feedbackRepository;
	
	@GetMapping("/getArtistById/{id}")
	public Optional<Artist> getArtistById(@PathVariable(value = "id") String artistid) {
		return artistRepository.findById(artistid);
	}
	
	@GetMapping("/newArtist")
	public List<Artist> newArtist() {
		return artistRepository.findByAccStatus("fresh");
	}
	
	@PutMapping("/artistApproveById/{id}")
	public void artistApproveById(@PathVariable(value = "id") String artistid,@Valid @RequestBody Artist artists) {
		Artist artist = artistRepository.findById(artistid).orElseThrow(() -> new RuntimeException("Error: Artist id is not found."));
		artist.setAccStatus(artists.getAccStatus());
		artistRepository.save(artist);
	}
	
	@DeleteMapping("/deleteArtistById/{id}")
	public void deleteArtistById(@PathVariable(value = "id") String artistid) {
		artistRepository.deleteById(artistid);
	}
	
	@GetMapping("/getNewPaintings")
	public List<Paintings> getNewPaintings() {
		return paintingsRepository.findByStatus("wait");
	}
	
	@GetMapping("/getPaintingsById/{id}")
	public Optional<Paintings> getPaintingsById(@PathVariable(value = "id") String paintid) {
		return paintingsRepository.findById(paintid);
	}
	
	@PutMapping("/paintingsApproveById/{id}")
	public void paintingsApproveById(@PathVariable(value = "id") String paintid,@Valid @RequestBody Paintings paintings) {
		Paintings painting = paintingsRepository.findById(paintid).orElseThrow(() -> new RuntimeException("Error: Paintings id is not found."));
		painting.setStatus(paintings.getStatus());
		paintingsRepository.save(painting);
	}
	
	@DeleteMapping("/deletePaintingsById/{id}")
	public void deletePaintingsById(@PathVariable(value = "id") String paintid) {
		paintingsRepository.deleteById(paintid);
	}
	
	@GetMapping("/getAllUser")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	@GetMapping("/getAllOrders")
	public List<Orders> getAllOrders() {
		return orderRepository.findAll(Sort.by(Sort.Direction.DESC, "orderDate"));
	}
	
	@GetMapping("/getUserById/{id}")
	public Optional<User> getUserById(@PathVariable(value = "id") String userid) {
		return userRepository.findById(userid);
	}
	
	@DeleteMapping("deleteUserById/{id}")
	public void deleteUserById(@PathVariable(value = "id") String userid) {
		userRepository.deleteById(userid);
	}
	
	@GetMapping("/getAllArtist")
	public List<Artist> getAllArtist() {
		return artistRepository.findAll();
	}
	
	@GetMapping("/getTotalArtist")
	public long getTotalArtist() {
		long count = artistRepository.count();
		return count;
		
	}
	
	@GetMapping("/getTotalUser")
	public long getTotalUser() {
		long count = userRepository.count();
		return count;
		
	}
	
	@GetMapping("/getTotalOrdersByUserId/{id}")
	public long getTotalOrdersByUserId(@PathVariable(value = "id") String userid) {
		Orders[] order = orderRepository.findByUserid(userid);
		return order.length;
	}
	
	@GetMapping("/getTotalCartByUserId/{id}")
	public long getTotalCartByUserId(@PathVariable(value = "id") String userid) {
		List<Cart> cart = cartRepository.findByUserid(userid);
		return cart.size();
	}
	
	@GetMapping("/getAllFeedback")
	public List<Feedback> getAllFeedback() {
		return feedbackRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}
	
	@DeleteMapping("deleteFeedbackById/{id}")
	public void deleteFeedbackById(@PathVariable(value = "id") String feedbackid) {
		feedbackRepository.deleteById(feedbackid);
	}
}
