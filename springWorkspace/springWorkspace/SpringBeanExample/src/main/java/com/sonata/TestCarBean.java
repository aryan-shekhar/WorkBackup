package com.sonata;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sonata.Car;


public class TestCarBean {

	public static void main(String[] args) {
		ApplicationContext con=new ClassPathXmlApplicationContext("bean.xml");
		Car c1=(Car)con.getBean("car2");
		System.out.println(c1.getCarYear());
		System.out.println(c1.getCarName());
		// TODO Auto-generated method stub

	}

}
