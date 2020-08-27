package com.artdeal.mongodb.api.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.zip.Deflater;

import javax.servlet.ServletContext;
import javax.validation.Valid;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.artdeal.mongodb.api.model.Artist;
import com.artdeal.mongodb.api.model.Cart;
import com.artdeal.mongodb.api.model.Feedback;
import com.artdeal.mongodb.api.model.Orders;
import com.artdeal.mongodb.api.model.Paintings;
import com.artdeal.mongodb.api.model.PortraitWallTeach;
import com.artdeal.mongodb.api.model.User;

import com.artdeal.mongodb.api.payloads.response.MessageResponse;
import com.artdeal.mongodb.api.repository.ArtistRepository;
import com.artdeal.mongodb.api.repository.CartRepository;
import com.artdeal.mongodb.api.repository.FeedbackRepository;
import com.artdeal.mongodb.api.repository.OrdersRepository;
import com.artdeal.mongodb.api.repository.PaintingsRepository;
import com.artdeal.mongodb.api.repository.PortraitWallTeachRepository;
import com.artdeal.mongodb.api.repository.UserRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserModuleController {

	@Autowired
	ServletContext context;
	
	@Autowired
	ArtistRepository artistRepository;
	
	@Autowired
	PaintingsRepository paintingsRepository;
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	PortraitWallTeachRepository portraitWallTeachRepository;
	
	@Autowired
	FeedbackRepository feedbackRepository;
	
	@GetMapping("/artistlist")
	public List<Artist> artistList() {
		return artistRepository.findByAccStatus("Approved", Sort.by(Sort.Direction.DESC, "rankReview"));
	}
	
	@GetMapping("/artistPortraitlist")
	public List<Artist> artistPortraitList() {
		return artistRepository.findByIsportraitAndAccStatus("true", "Approved", Sort.by(Sort.Direction.DESC, "rankReview"));
	}
	
	@GetMapping("/artistWallpainterlist")
	public List<Artist> artistWallList() {
		return artistRepository.findByIswallpainterAndAccStatus("true", "Approved", Sort.by(Sort.Direction.DESC, "rankReview"));
	}
	
	@GetMapping("/getArtistById/{id}")
	public Optional<Artist> getArtistById(@PathVariable(value = "id") String artistid) {
		return artistRepository.findById(artistid);
	}
	
	@GetMapping("/getsSoldPaintingsCountByArtistId/{id}")
	public int getsSoldPaintingsCountByArtistId(@PathVariable(value = "id") String artistid) {
		Orders[] order=ordersRepository.findByArtistidAndStatus(artistid, "Delivered");
		int length=order.length;
		return length;
	}
	
	
	
	@GetMapping("/getPaintingsByArtistId/{id}")
	public List<Paintings> getPaintingsByArtistId(@PathVariable(value = "id") String artistid) {
		return paintingsRepository.findByArtistid(artistid);
	}
	
	@GetMapping("/getPaintingsById/{id}")
	public Optional<Paintings> getPaintingsById(@PathVariable(value = "id") String paintid) {
		return paintingsRepository.findById(paintid);
	}

	@PostMapping("/addCart")
	public ResponseEntity<?> addCart(@Valid @RequestBody Cart cart){
		if(cartRepository.existsByUseridAndPaintingsid(cart.getUserid(), cart.getPaintingsid())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("exists"));
		}
		cartRepository.save(cart);
		return ResponseEntity.ok(new MessageResponse("Added to cart successfully!"));
	}
	
	@GetMapping("/getCartByUserId/{id}")
	public List<Cart> getCartByUserId(@PathVariable(value = "id") String userid) {
		return cartRepository.findByUserid(userid);
	}
	
	@GetMapping("/getUserById/{id}")
	public Optional<User> getUserById(@PathVariable(value = "id") String userid) {
		return userRepository.findById(userid);
	}
	
	@DeleteMapping("/deleteCartById/{id}")
	public void deleteCartById(@PathVariable(value = "id") String cartid) {
		cartRepository.deleteById(cartid);
	}
	
	@PutMapping("/changeUserAddressById/{id}")
	public void changeUserAddressById(@PathVariable(value = "id") String userid,@Valid @RequestBody User user) {
		User user1 = userRepository.findById(userid).orElseThrow(() -> new RuntimeException("Error: User id is not found."));
		user1.setAddress(user.getAddress());
		user1.setCity(user.getCity());
		userRepository.save(user1);
	}
	
	@PostMapping("/addOrders")
	public ResponseEntity<?> addOrders(@RequestBody Orders orders) throws  IOException{	
		Orders order = new Orders(orders.getUserid(), orders.getArtistid(), orders.getPaintingsid(), orders.getPwtid(), orders.getOrderDate(), orders.getStatus(), orders.getRating(), orders.getComment());
		
		order.setStatus("Getting ready");
		ordersRepository.save(order);
		return ResponseEntity.ok(new MessageResponse("Orders saved successfully!"));
	}
	
	@GetMapping("/getOrdersByUserId/{id}")
	public List<Orders> getOrdersByUserId(@PathVariable(value = "id") String userid) {
		return ordersRepository.findByUserid(userid, Sort.by(Sort.Direction.DESC, "orderDate"));
	}
	
	
	@GetMapping("/getPwtById/{id}")
	public Optional<PortraitWallTeach> getPwtById(@PathVariable(value = "id") String pwtid) {
		return portraitWallTeachRepository.findById(pwtid);
	}
	
	@GetMapping("/getOrderById/{id}")
	public Optional<Orders> getOrderById(@PathVariable(value = "id") String orderid) {
		return ordersRepository.findById(orderid);
	}
	
	@PutMapping("/updateReviewsById/{id}")
	public void updateReviewsById(@PathVariable(value = "id") String orderid,@Valid @RequestBody Orders order) {
		Orders order1 = ordersRepository.findById(orderid).orElseThrow(() -> new RuntimeException("Error: Order id is not found."));
		order1.setRating(order.getRating());
		order1.setComment(order.getComment());
		ordersRepository.save(order1);
		Orders[] orderAll = ordersRepository.findByArtistid(order.getArtistid());
		float rate = 0;
		int time=0;
		for (int i = 0; i < orderAll.length; i++) {
			if (orderAll[i].getRating() > 0) {
				rate = rate + orderAll[i].getRating();
				time = time + 1;
			}

		}
		float totalRate = 0;
		totalRate = rate / time;
		Artist artist = artistRepository.findById(order.getArtistid()).orElseThrow(() -> new RuntimeException("Error: Order id is not found."));
		artist.setRankReview(totalRate);
		artistRepository.save(artist);
	}
	
	@PostMapping("/savePortraitForm")
	public ResponseEntity<?> savePortraitForm(@Valid @RequestParam("file1") MultipartFile file1,  @RequestParam("userid") String userid, @RequestParam("artistid") String artistid,  @RequestParam("type") String type, @RequestParam("price") int price) throws  IOException{
				
		String filename = file1.getOriginalFilename();
	
		PortraitWallTeach portraitWallTeach = new PortraitWallTeach(artistid,
				userid,
				"true",
				"false",
				"false",
				type,
				price, "wait");
		portraitWallTeach.setPicByteFile1(compressZLib(file1.getBytes()));
		portraitWallTeach.setFilename(filename);
		portraitWallTeachRepository.save(portraitWallTeach);
		return ResponseEntity.ok(new MessageResponse("Portrait Request saved successfully!"));
	}
	
	@PostMapping("/saveWallpaintForm")
	public ResponseEntity<?> saveWallpaintForm(@Valid @RequestParam("file1") MultipartFile file1,  @RequestParam("userid") String userid, @RequestParam("artistid") String artistid,  @RequestParam("type") String type, @RequestParam("price") int price) throws  IOException{
		
		String filename = file1.getOriginalFilename();
		
		PortraitWallTeach portraitWallTeach = new PortraitWallTeach(artistid,
				userid,
				"false",
				"true",
				"false",
				type,
				price, "wait");
		portraitWallTeach.setPicByteFile1(compressZLib(file1.getBytes()));
		portraitWallTeach.setFilename(filename);
		portraitWallTeachRepository.save(portraitWallTeach);
		return ResponseEntity.ok(new MessageResponse("Wallpaint Request saved successfully!"));
	}
	
	@PutMapping("/updatePaintingsById/{id}")
	public void updatePaintingsById(@PathVariable(value = "id") String paintid,@Valid @RequestBody String status) {
		Paintings painting = paintingsRepository.findById(paintid).orElseThrow(() -> new RuntimeException("Error: Paintings id is not found."));
		painting.setStatus(status);
		paintingsRepository.save(painting);
	}
	
	@PutMapping("/updateOrderById/{id}")
	public void updateOrderById(@PathVariable(value = "id") String orderid,@Valid @RequestBody String status) {
		Orders order = ordersRepository.findById(orderid).orElseThrow(() -> new RuntimeException("Error: Order id is not found."));
		order.setStatus(status);
		ordersRepository.save(order);
	}
	
	@GetMapping("/getAllPaintingsByApproved")
	public List<Paintings> getAllPaintingsByApproved() {
		return paintingsRepository.findFirst8ByStatus("Approved");
	}
	
	@GetMapping("/getTopArtist")
	public List<Artist> getTopArtist() {
		List<Artist> artist = artistRepository.findByAccStatus("Approved", Sort.by(Sort.Direction.DESC, "rankReview"));
		return artist.subList(0, 4);
	}
	
	@PutMapping("/updatePaintingsViewCount/{id}")
	public void updatePaintingsViewCount(@PathVariable(value = "id") String paintid,@Valid @RequestBody Paintings paintings) {
		Paintings paint = paintingsRepository.findById(paintid).orElseThrow(() -> new RuntimeException("Error: Paintings id is not found."));
		paint.setCountView(paintings.getCountView());
		paintingsRepository.save(paint);
	}
	
	@GetMapping("/getAllPaintings")
	public List<Paintings> getAllPaintings() {
		return paintingsRepository.findByStatus("Approved");
	}
	
	@GetMapping("/getPwtByUserId/{id}")
	public List<PortraitWallTeach> getPwtByUserId(@PathVariable(value = "id") String userid) {
		return portraitWallTeachRepository.findByUserid(userid, Sort.by(Sort.Direction.DESC, "id"));
	}
	
	@GetMapping("/get10Artist")
	public List<Artist> get10Artist() {
		return artistRepository.findFirst8ByAccStatus("Approved",Sort.by(Sort.Direction.DESC, "rankReview"));
	}
	
	
	@GetMapping("/getAllPaintingsByArtistId/{id}")
	public List<Paintings> getAllPaintingsByArtistId(@PathVariable(value = "id") String artistid) {
		return paintingsRepository.findByArtistidAndStatus(artistid,"Approved");
	}
	
	// compress the image bytes before storing it in the database
	public static byte[] compressZLib(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}
		return outputStream.toByteArray();
	}
	
	
	@PostMapping("/feedback")
	public ResponseEntity<?> feedback(@Valid @RequestBody Feedback feedback){
		feedbackRepository.save(feedback);
		return ResponseEntity.ok(new MessageResponse("Feedback inserted successfully!"));
	}
	
	
}
