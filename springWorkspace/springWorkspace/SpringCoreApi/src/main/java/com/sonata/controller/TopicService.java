package com.sonata.controller;

import java.util.ArrayList;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sonata.model.Topic;

@Service
public class TopicService {
		
	private List<Topic> topics=new ArrayList<>(
			Arrays.asList(
			new Topic("Spring","Spring  DATA JPA ","It gives the details about JPA"),
			new Topic("Hibernate","Core java to DB ","Connect to the Data Base"),
			new Topic("Angular","Angular with springData ","Consume data at Front End")
			));
	
	public List<Topic> getTopic()
	{
		return topics;
	}
	
	public Topic getSingleTopic(String id) 
	{
		return topics.stream().filter(t->t.getId().equals(id)).findFirst().get();
	}
	
	public void addTopic(Topic topic) 
	{
		topics.add(topic);
	}
}
