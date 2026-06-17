package com.farmconnect.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty; // Import Jackson annotation

@Entity
@Table(name = "orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonProperty("buyer_name") // Accepts buyer_name from React
	private String buyerName;

	@JsonProperty("product_name") // Accepts product_name from React
	private String productName;

	private Double price;
	private Integer quantity;

	@JsonProperty("total_price") // Accepts total_price from React
	private Double totalPrice;

	private String status;

	public Order() {
		super();
	}

	public Order(Long id, String buyerName, String productName, Double price, Integer quantity, Double totalPrice, String status) {
		super();
		this.id = id;
		this.buyerName = buyerName;
		this.productName = productName;
		this.price = price;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.status = status;
	}

	public Long getId() { return id; }
	public void setId(long id) { this.id = id; }
	public String getBuyerName() { return buyerName; }
	public void setBuyerName(String buyerName) { this.buyerName = buyerName; }
	public String getProductName() { return productName; }
	public void setProductName(String productName) { this.productName = productName; }
	public Double getPrice() { return price; }
	public void setPrice(Double price) { this.price = price; }
	public Integer getQuantity() { return quantity; }
	public void setQuantity(Integer quantity) { this.quantity = quantity; }
	public Double getTotalPrice() { return totalPrice; }
	public void setTotalPrice(Double totalPrice) { this.totalPrice = totalPrice; }
	public String getStatus() { return status; }
	public void setStatus(String status) { this.status = status; }

	@Override
	public String toString() {
		return "Order [id=" + id + ", buyerName=" + buyerName + ", productName=" + productName + ", price=" + price
				+ ", quantity=" + quantity + ", totalPrice=" + totalPrice + ", status=" + status + "]";
	}
}
