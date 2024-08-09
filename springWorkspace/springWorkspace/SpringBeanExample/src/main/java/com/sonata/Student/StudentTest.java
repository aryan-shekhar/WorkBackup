package com.sonata.Student;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sonata.Student.StudentData;
import com.sonata.employee.Employee;

public class StudentTest {
	

	public static void main(String[] args) {
		ApplicationContext con=new ClassPathXmlApplicationContext("bean.xml");
		StudentData c1=(StudentData)con.getBean("studentData");
		c1.display();
		// TODO Auto-generated method stub

	}

}
