package com.sonata.Product;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Product {
	private int pId;
	private String pName;
	List<String> answers;
	
	
	Product(int pId,String pName,List<String> answers)
	{
		this.pId=pId;
		this.pName=pName;
		this.answers=answers;
	}
		
	@Override
	public String toString() {
		return "Product [pId=" + pId + ", pName=" + pName + ", answers=" + answers + "]";
	}



	public static void main(String[] args) {

	}

}
