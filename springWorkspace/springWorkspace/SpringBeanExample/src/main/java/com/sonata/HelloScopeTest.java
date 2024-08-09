package com.sonata;
import org.springframework.context.ApplicationContext;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloScopeTest {

	public static void main(String[] args) {
		ApplicationContext con=new ClassPathXmlApplicationContext("bean.xml");
		HelloScope h1=(HelloScope)con.getBean("Hello");
		HelloScope h2=(HelloScope)con.getBean("Hello");
		h1.setData("Aryan");
		h1.getData();
		h2.getData();

	}

}
