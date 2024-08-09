package com.sonata.controllerExample;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@SpringBootApplication
@ComponentScan(basePackages= {"com.sonata.controllerExample"})
@Controller
@RequestMapping("/")

public class URLController {

	@RequestMapping(method=RequestMethod.GET)
	public String helloWorld(ModelMap modelMap) 
	{
		return "index";
		
	}
	
	@RequestMapping(value="/helloworld",method=RequestMethod.GET)
	public String helloWorld1(ModelMap modelMap) 
	{
		modelMap.addAttribute("message1","WelcomeSonata");
		return "myPage";
	}
}
