package com.artdeal.mongodb.api.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.ServletContext;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.artdeal.mongodb.api.model.Admin;
import com.artdeal.mongodb.api.model.ERole;
import com.artdeal.mongodb.api.model.Role;
import com.artdeal.mongodb.api.payloads.request.AdminLoginRequest;
import com.artdeal.mongodb.api.payloads.request.AdminSignupRequest;
import com.artdeal.mongodb.api.payloads.response.JwtResponse;
import com.artdeal.mongodb.api.payloads.response.MessageResponse;
import com.artdeal.mongodb.api.repository.AdminRepository;
import com.artdeal.mongodb.api.repository.RoleRepository;
import com.artdeal.mongodb.api.security.jwt.JwtUtils;
import com.artdeal.mongodb.api.security.services.AdminDetailsImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AdminAuthController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	ServletContext context;
	
	@Autowired
	AdminRepository adminRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/adminSignin")
	public ResponseEntity<?> authenticateArtist(@Valid @RequestParam("admin") String admin) throws JsonMappingException, JsonProcessingException {
		AdminLoginRequest loginRequest = new ObjectMapper().readValue(admin, AdminLoginRequest.class);
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtTokenArtist(authentication);
		
		AdminDetailsImpl userDetails = (AdminDetailsImpl) authentication.getPrincipal();		
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
	
	@PostMapping("/adminSignup")
	public ResponseEntity<?> registerArtist(@Valid @RequestBody AdminSignupRequest signUpRequest ){
		if (adminRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (adminRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}
		
		Admin admin = new Admin(signUpRequest.getUsername(),
				 signUpRequest.getFullname(),
				 signUpRequest.getEmail(),
				 encoder.encode(signUpRequest.getPassword()));
		
		String strRoles = signUpRequest.getRoles();
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
		admin.setRoles(roles);
		adminRepository.save(admin);
		return ResponseEntity.ok(new MessageResponse("Admin registered successfully!"));
	}
	
}
