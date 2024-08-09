package com.sonata;

import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.beans.factory.annotation.Autowired;

public class User {
	@Autowired
	@Qualifier("car1")
	private Car mycar;
	
	User(){}
	
	public void display() 
	{
		System.out.println(mycar.getCarName());
		System.out.println(mycar.getCarYear());
		
	}

}
