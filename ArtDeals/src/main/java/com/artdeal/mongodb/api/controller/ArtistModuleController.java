package com.artdeal.mongodb.api.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.zip.Deflater;

import javax.servlet.ServletContext;
import javax.validation.Valid;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.artdeal.mongodb.api.model.Orders;
import com.artdeal.mongodb.api.model.Paintings;
import com.artdeal.mongodb.api.model.PortraitWallTeach;
import com.artdeal.mongodb.api.model.User;
import com.artdeal.mongodb.api.payloads.response.MessageResponse;
import com.artdeal.mongodb.api.repository.ArtistRepository;
import com.artdeal.mongodb.api.repository.CartRepository;
import com.artdeal.mongodb.api.repository.OrdersRepository;
import com.artdeal.mongodb.api.repository.PaintingsRepository;
import com.artdeal.mongodb.api.repository.PortraitWallTeachRepository;
import com.artdeal.mongodb.api.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/artist")
public class ArtistModuleController {

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
	
	@PostMapping("/addNewPainting")
	public ResponseEntity<?> addNewPainting(@Valid @RequestParam("file1") MultipartFile file1, @RequestParam("file2") MultipartFile file2, @RequestParam("file3") MultipartFile file3, @RequestParam("painting") String paintings, @RequestParam("artistid") String artistid) throws  IOException{
		Paintings painting = new ObjectMapper().readValue(paintings, Paintings.class);
		String filename1 = file1.getOriginalFilename();
		String filename2 = file2.getOriginalFilename();
		String filename3 = file3.getOriginalFilename();
		String modifiedfileName1 = FilenameUtils.getBaseName(filename1)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename1);
		String modifiedfileName2 = FilenameUtils.getBaseName(filename2)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename2);
		String modifiedfileName3 = FilenameUtils.getBaseName(filename3)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename3);

		
		Paintings paint = new Paintings(artistid,
				painting.getTitle(),
				painting.getDate(),
				painting.getType(),
				painting.getPrice(),
				painting.getDescription());
		
		
		paint.setPicByteFile1(compressZLib(file1.getBytes()));
		paint.setPicByteFile2(compressZLib(file2.getBytes()));
		paint.setPicByteFile3(compressZLib(file3.getBytes()));
		paint.setFilename1(modifiedfileName1);
		paint.setFilename2(modifiedfileName2);
		paint.setFilename3(modifiedfileName3);
		paint.setStatus("wait");
		paint.setCountView(0);
		paintingsRepository.save(paint);
		return ResponseEntity.ok(new MessageResponse("Paintings saved successfully!"));
	}
	
	@GetMapping("/getArtistById/{id}")
	public Optional<Artist> getArtistById(@PathVariable(value = "id") String artistid) {
		return artistRepository.findById(artistid);
	}
	
	@PutMapping("/updateArtistById/{id}")
	public void updateArtistById(@PathVariable(value = "id") String artistid,@Valid @RequestBody Artist artist) {
		Artist artist1 = artistRepository.findById(artistid).orElseThrow(() -> new RuntimeException("Error: Artist id is not found."));
		artist1.setFullname(artist.getFullname());
		artist1.setContact(artist.getContact());
		artist1.setExperience(artist.getExperience());
		artist1.setQualification(artist.getQualification());
		artist1.setWebsite(artist.getWebsite());
		artist1.setAddress(artist.getAddress());
		artist1.setCity(artist.getCity());
		artist1.setDescription(artist.getDescription());
		artistRepository.save(artist1);
	}
	
	@PutMapping("/updatePriceByArtistId/{id}")
	public void updatePriceByArtistId(@PathVariable(value = "id") String artistid,@Valid @RequestBody Artist artist) {
		Artist artist1 = artistRepository.findById(artistid).orElseThrow(() -> new RuntimeException("Error: Artist id is not found."));
		artist1.setPrice(artist.getPrice());
		artistRepository.save(artist1);
	}
	
	
	@GetMapping("/getPortraitRequestByArtistId/{id}")
	public List<PortraitWallTeach> getPortraitRequestByArtistId(@PathVariable(value = "id") String artistid) {
		return portraitWallTeachRepository.findByArtistidAndPortrait(artistid,"true",Sort.by(Sort.Direction.DESC, "id"));
	}
	
	@GetMapping("/getWallpaintRequestByArtistId/{id}")
	public List<PortraitWallTeach> getWallpaintRequestByArtistId(@PathVariable(value = "id") String artistid) {
		return portraitWallTeachRepository.findByArtistidAndWallpaint(artistid,"true",Sort.by(Sort.Direction.DESC, "id"));
	}
	
	@GetMapping("/getUserById/{id}")
	public Optional<User> getUserById(@PathVariable(value = "id") String userid) {
		return userRepository.findById(userid);
	}
	
	@GetMapping("/getPwtById/{id}")
	public Optional<PortraitWallTeach> getPwtById(@PathVariable(value = "id") String id) {
		return portraitWallTeachRepository.findById(id);
	}
	
	@PutMapping("/portraitWallpaintRequestAcceptOrReject/{id}")
	public void portraitWallpaintRequestAcceptOrReject(@PathVariable(value = "id") String pwtid,@Valid @RequestBody PortraitWallTeach pwt) {
		PortraitWallTeach pwts = portraitWallTeachRepository.findById(pwtid).orElseThrow(() -> new RuntimeException("Error: PortraitWallTeach id is not found."));
		pwts.setStatus(pwt.getStatus());
		portraitWallTeachRepository.save(pwts);
	}
	
	@PostMapping("/addOrders")
	public ResponseEntity<?> addOrders(@RequestBody Orders orders) throws  IOException{	
		Orders order = new Orders(orders.getUserid(), orders.getArtistid(), orders.getPaintingsid(), orders.getPwtid(), orders.getOrderDate(), orders.getStatus(), orders.getRating(), orders.getComment());
		
		ordersRepository.save(order);
		return ResponseEntity.ok(new MessageResponse("Orders saved successfully!"));
	}
	
	@GetMapping("/getOrdersByArtistId/{id}")
	public List<Orders> getOrdersByArtistId(@PathVariable(value = "id") String artistid) {
		return ordersRepository.findByArtistid(artistid, Sort.by(Sort.Direction.DESC, "orderDate"));
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
	
	@GetMapping("/getPaintingsById/{id}")
	public Optional<Paintings> getPaintingsById(@PathVariable(value = "id") String paintid) {
		return paintingsRepository.findById(paintid);
	}
	
	@GetMapping("/getOrderById/{id}")
	public Optional<Orders> getOrderById(@PathVariable(value = "id") String orderid) {
		return ordersRepository.findById(orderid);
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
	
	
}
