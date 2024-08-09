package com.sonata.Product;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sonata.Product.Product;

public class ProductTest {
	
	
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("bean.xml");
		Product p1=(Product)context.getBean("product");
		System.out.println(p1);
	// TODO Auto-generated method stub

	}

}
