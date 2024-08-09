package com.sonata.controllerExample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.sonata.Product.Product;


@Controller
//@RestController
@RequestMapping("/helloworld")
public class SimpleController {
	
//	Product p= new Product();
//	
//	@RequestMapping("/show")
//	public String display() 
//	{
//		p.setpName("Bottle");
//			return p.getpName();
//		}
//	
//	@RequestMapping(method=RequestMethod.GET)
//	public ModelAndView helloWorld() 
//	{
//		ModelAndView modelAndView=new ModelAndView("myPage");
//		modelAndView.addObject("message1","Spring MVC!");
//		
//		return modelAndView;
//	}
//	
//	@RequestMapping(value="/sayspringmvc",method=RequestMethod.GET)
//	public ModelAndView helloWorld1(){
//		ModelAndView modelAndView=new ModelAndView("myPage");
//		modelAndView.addObject("message1","Spring MVC! Saying");
//		
//		return modelAndView;
//		
//	}
//	
	
//	@RequestMapping(value="/helloworld",method=RequestMethod.GET)
//	public String helloWorld2(ModelMap modelMap) 
//	{
//		modelMap.addAttribute("message1","WelcomeSonata");
//		return "myPage";
//	}
//	
	@RequestMapping(value="/helloString/{helloId}",method=RequestMethod.GET)
	public String helloURITemplate(@PathVariable int helloId,Model model)
	{
		model.addAttribute("message","MyMessage is selected");
		return "Simple"+helloId;
		
	}
//	
//	@RequestMapping(method=RequestMethod.GET)
//	public String helloWorld5(ModelMap modelMap) 
//	{
//		return "index";
//	}
//	
	
	
	
	
	
}
