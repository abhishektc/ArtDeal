package com.artdeal.mongodb.api.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.artdeal.mongodb.api.model.Admin;

import com.artdeal.mongodb.api.repository.AdminRepository;
import com.artdeal.mongodb.api.repository.RoleRepository;

@Service
public class AdminDetailsServiceImpl implements UserDetailsService{
	@Autowired
	AdminRepository adminRepository;

	@Autowired
	RoleRepository roleRepository;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			Admin admin = adminRepository.findByUsername(username)
					.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

			return AdminDetailsImpl.build(admin);
	}
}
