package com.farmconnect.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String category;
	private Double price;
	private String description;
	private Integer quantity;
	private String imageUrl;
	
	public Product() {
		super();
	}

	public Product(Long id, String name, String category, Double price, String description, Integer quantity, String imageUrl) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.description = description;
		this.quantity = quantity;
		this.imageUrl = imageUrl;
	}

	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public String getCategory() { return category; }
	public void setCategory(String category) { this.category = category; }

	public Double getPrice() { return price; }
	public void setPrice(Double price) { this.price = price; }

	public String getDescription() { return description; } // Fixed uppercase D
	public void setDescription(String description) { this.description = description; }

	public Integer getQuantity() { return quantity; }
	public void setQuantity(Integer quantity) { this.quantity = quantity; }

	public String getImageUrl() { return imageUrl; }
	public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", category=" + category + ", price=" + price 
				+ ", description=" + description + ", quantity=" + quantity + ", imageUrl=" + imageUrl + "]";
	}
}
