package com.farmconnect.controller;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.farmconnect.entity.User;
import com.farmconnect.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userservice.getAllUsers();
	}
	
	@PostMapping("/register")
	public User saveUser(@RequestBody User user) {
		return userservice.saveUser(user);
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		return userservice.loginUser(user.getEmail(), user.getPassword());
	}
	
	
	
	

}
