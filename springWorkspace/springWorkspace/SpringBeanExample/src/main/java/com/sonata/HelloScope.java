package com.sonata;
import org.springframework.context.annotation.Scope;

@Scope("singleton")
public class HelloScope {
	


private String data;


	public void getData()
		{
		System.out.println("this is my data " + this.data);
		}
	public void setData(String data) {
	this.data= data;
	}
}