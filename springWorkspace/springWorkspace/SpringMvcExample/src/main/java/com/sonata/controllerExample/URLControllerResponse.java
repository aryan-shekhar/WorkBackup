package com.sonata.controllerExample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("helloSimple")


public class URLControllerResponse {

	@RequestMapping(value="/hello/{helloId}",method=RequestMethod.GET)
	public String helloURIparams(@PathVariable int helloId,@RequestParam("myCity") String city,Model model)
	
	{
		model.addAttribute("message", "Ilive in "+city);
		
		return "Simple"+helloId;
		
	}

}
