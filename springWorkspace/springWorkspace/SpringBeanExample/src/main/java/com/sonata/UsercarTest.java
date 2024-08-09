package com.sonata;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsercarTest {

	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("bean.xml");
		User u1=(User)context.getBean("user");
		u1.display();
		// TODO Auto-generated method stub

	}

}
