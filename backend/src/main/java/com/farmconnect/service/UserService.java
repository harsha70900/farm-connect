package com.farmconnect.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmconnect.entity.User;
import com.farmconnect.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
		
	}
	
	public User saveUser(User user) {

	    if(userRepository.existsByEmail(user.getEmail())){
	        throw new RuntimeException(
	            "Email already exists"
	        );
	    }

	    return userRepository.save(user);
	}
	
	public User loginUser(String email, String password) {
		User user = userRepository.findByEmail(email);
		
		if(user != null && user.getPassword().equals(password)){
			return user;
		}
		return null;
	}

}
