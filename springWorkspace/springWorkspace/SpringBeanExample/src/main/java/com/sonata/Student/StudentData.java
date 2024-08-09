package com.sonata.Student;
import java.util.*;

public class StudentData {
	private String schoolName;
	private List<String> studentData;
	
	public String getSchoolName() {
		return schoolName;
	}



	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}



	public List<String> getStudentData() {
		return studentData;
	}



	public void setStudentData(List<String> studentData) {
		this.studentData = studentData;
	}
	

	@Override
	public String toString() {
		return "StudentData [schoolName=" + schoolName + ", studentData=" + studentData + "]";
	}
	
	public void display() 
	{
		System.out.println("The schoolName is:"+schoolName);
		System.out.println("The Student Data is:"+studentData);
		
		for(String std:studentData) 
		{
			System.out.println(std);
		}
	}
	


	public static void main(String[] args) {
		

	}

}
