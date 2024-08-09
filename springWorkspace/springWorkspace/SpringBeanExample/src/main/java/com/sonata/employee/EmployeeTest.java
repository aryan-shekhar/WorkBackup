package com.sonata.employee;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sonata.employee.Employee;

public class EmployeeTest {

	public static void main(String[] args) {
		ApplicationContext con=new ClassPathXmlApplicationContext("bean.xml");
		Employee c1=(Employee)con.getBean("empDetails");
		
		System.out.println(c1);
		// TODO Auto-generated method stub


	}

}
