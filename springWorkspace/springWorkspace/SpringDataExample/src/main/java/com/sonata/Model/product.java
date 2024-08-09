package com.sonata.Model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import java.util.*;
@Entity
public class product {
	@Id
	private double pId;
	private String pname;
	private double price;
	
	public double getpId() {
		return pId;
	}
	public void setpId(double pId) {
		this.pId = pId;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}

	
	}
	

