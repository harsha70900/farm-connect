package com.farmconnect.controller;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.farmconnect.entity.User;
import com.farmconnect.service.UserService;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userservice.getAllUsers();
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> saveUser(
	        @RequestBody User user) {

	    try {

	        User savedUser =
	            userservice.saveUser(user);

	        return ResponseEntity.ok(savedUser);

	    } catch (RuntimeException e) {

	        return ResponseEntity
	                .badRequest()
	                .body(e.getMessage());
	    }
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		return userservice.loginUser(user.getEmail(), user.getPassword());
	}
	
	
	
	

}
