package com.artdeal.mongodb.api.security.services;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.artdeal.mongodb.api.model.Artist;
import com.artdeal.mongodb.api.repository.ArtistRepository;
import com.artdeal.mongodb.api.repository.RoleRepository;

@Service
public class ArtistDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	ArtistRepository artistRepository;

	@Autowired
	RoleRepository roleRepository;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			Artist artist = artistRepository.findByUsername(username)
					.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

			return ArtistDetailsImpl.build(artist);
	}
}
