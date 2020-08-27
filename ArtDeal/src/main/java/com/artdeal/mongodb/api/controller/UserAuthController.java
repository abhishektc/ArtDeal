package com.artdeal.mongodb.api.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.zip.Deflater;


import javax.servlet.ServletContext;
import javax.validation.Valid;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.artdeal.mongodb.api.model.Artist;
import com.artdeal.mongodb.api.model.ERole;
import com.artdeal.mongodb.api.model.Role;

import com.artdeal.mongodb.api.payloads.request.ArtistLoginRequest;
import com.artdeal.mongodb.api.payloads.request.ArtistSignupRequest;

import com.artdeal.mongodb.api.payloads.response.JwtResponse;
import com.artdeal.mongodb.api.payloads.response.MessageResponse;
import com.artdeal.mongodb.api.repository.ArtistRepository;
import com.artdeal.mongodb.api.repository.RoleRepository;
import com.artdeal.mongodb.api.security.jwt.JwtUtils;
import com.artdeal.mongodb.api.security.services.ArtistDetailsImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class UserAuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	ServletContext context;
	
	@Autowired
	ArtistRepository artistRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/artistSignin")
	public ResponseEntity<?> authenticateArtist(@Valid @RequestParam("artist") String artist) throws JsonMappingException, JsonProcessingException {
		ArtistLoginRequest loginRequest = new ObjectMapper().readValue(artist, ArtistLoginRequest.class);
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		if (artistRepository.existsByUsernameAndAccStatus(loginRequest.getUsername(), "fresh")) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Your Account is not Approved by Admin!"));
		}
		String jwt = jwtUtils.generateJwtTokenArtist(authentication);
		
		ArtistDetailsImpl userDetails = (ArtistDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(),
												 userDetails.getFullname(),
												 userDetails.getEmail(), 
												 roles));

	}
	
//	@PostMapping("/artistSignup")
//	public ResponseEntity<?> registerArtist(@Valid @RequestParam("file") MultipartFile file, @RequestParam("file1") MultipartFile file1, @RequestParam("user") String user, @RequestParam("portrait") String portrait, @RequestParam("wallpainter") String wallpainter) throws JsonMappingException, JsonProcessingException{
//		ArtistSignupRequest signupRequest = new ObjectMapper().readValue(user, ArtistSignupRequest.class);
//		signupRequest.setIsportrait(portrait);
//		signupRequest.setIswallpainter(wallpainter);
//		if (artistRepository.existsByUsername(signupRequest.getUsername())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("Error: Username is already taken!"));
//		}
//
//		if (artistRepository.existsByEmail(signupRequest.getEmail())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("Error: Email is already in use!"));
//		}
//		
//		boolean isExist = new File(context.getRealPath("/artistsamplepaint/")).exists();
//		if (!isExist) {
//			new File(context.getRealPath("/artistsamplepaint/")).mkdir();
//		}
//		
//		String filename = file.getOriginalFilename();
//		String filename1 = file1.getOriginalFilename();
//		String modifiedfileName = FilenameUtils.getBaseName(filename)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename);
//		String modifiedfileName1 = FilenameUtils.getBaseName(filename1)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename1);
//		File serverFile = new File(context.getRealPath("/artistsamplepaint/"+File.separator+modifiedfileName));
//		File serverFile1 = new File(context.getRealPath("/artistsamplepaint/"+File.separator+modifiedfileName1));
//		try {
//			FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
//			FileUtils.writeByteArrayToFile(serverFile1, file.getBytes());
//
//		}catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		
//		Artist artist = new Artist(signupRequest.getUsername(),
//				 signupRequest.getFullname(),
//				 signupRequest.getEmail(),
//				 signupRequest.getContact(),
//				 signupRequest.getExperience(),
//				 signupRequest.getQualification(),
//				 signupRequest.getWebsite(),
//				 signupRequest.getAddress(),
//				 signupRequest.getCity(),
//				 encoder.encode(signupRequest.getPassword()),
//				 signupRequest.getIsportrait(),
//				 signupRequest.getIswallpainter(),
//				 signupRequest.getFilename(),
//				 signupRequest.getFilename1());
//		
//		String strRoles = signupRequest.getRoles();
//		Set<Role> roles = new HashSet<>();
//
//		if (strRoles == null) {
//			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
//					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//			roles.add(userRole);
//		} else {
//				switch (strRoles) {
//				case "admin":
//					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
//							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//					roles.add(adminRole);
//
//					break;
//				case "artist":
//					Role artistRole = roleRepository.findByName(ERole.ROLE_ARTIST)
//							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//					roles.add(artistRole);
//
//					break;
//				default:
//					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
//							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//					roles.add(userRole);
//				}
//		}
//		artist.setFilename(modifiedfileName);
//		artist.setFilename1(modifiedfileName1);
//		artist.setRoles(roles);
//		artist.setAcc_status("fresh");
//		artistRepository.save(artist);
//		return ResponseEntity.ok(new MessageResponse("Artist registered successfully!"));
//	}
	
	
	@PostMapping("/artistSignup")
	public ResponseEntity<?> registerArtist(@Valid @RequestParam("file1") MultipartFile file1, @RequestParam("file2") MultipartFile file2, @RequestParam("user") String user, @RequestParam("portrait") String portrait, @RequestParam("wallpainter") String wallpainter) throws IOException{
		ArtistSignupRequest signupRequest = new ObjectMapper().readValue(user, ArtistSignupRequest.class);
		signupRequest.setIsportrait(portrait);
		signupRequest.setIswallpainter(wallpainter);
		if (artistRepository.existsByUsername(signupRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (artistRepository.existsByEmail(signupRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}
		
		String filename1 = file1.getOriginalFilename();
		String filename2 = file2.getOriginalFilename();
		String modifiedfileName1 = FilenameUtils.getBaseName(filename1)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename1);
		String modifiedfileName2 = FilenameUtils.getBaseName(filename2)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename2);
		
		
		Artist artist = new Artist(signupRequest.getUsername(),
				 signupRequest.getFullname(),
				 signupRequest.getEmail(),
				 signupRequest.getContact(),
				 signupRequest.getExperience(),
				 signupRequest.getQualification(),
				 signupRequest.getWebsite(),
				 signupRequest.getAddress(),
				 signupRequest.getCity(),
				 encoder.encode(signupRequest.getPassword()),
				 signupRequest.getIsportrait(),
				 signupRequest.getIswallpainter(),
				 signupRequest.getFilename1(),
				 signupRequest.getFilename2());
		
		String strRoles = signupRequest.getRoles();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
				switch (strRoles) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "artist":
					Role artistRole = roleRepository.findByName(ERole.ROLE_ARTIST)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(artistRole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
		}
		artist.setPicByteFile1(compressZLib(file1.getBytes()));
		artist.setPicByteFile2(compressZLib(file2.getBytes()));
		artist.setFilename1(modifiedfileName1);
		artist.setFilename2(modifiedfileName2);
		artist.setRoles(roles);
		artist.setAccStatus("fresh");
		artistRepository.save(artist);
		return ResponseEntity.ok(new MessageResponse("Artist registered successfully!"));
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
