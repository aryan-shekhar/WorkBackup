package com.sonata.ProductController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Model.product;
import com.sonata.ProductRepository.ProductRepository;


@RestController
public class ProductController {
	
	@Autowired
	ProductRepository proRepository;
	
	@GetMapping("/product")
	public List<product> getAllproduct()
	{
		return proRepository.findAll();
	}
	
	@PostMapping("/product")
	public product saveProduct(@RequestBody product prod){
		return proRepository.save(prod);
	}
	
//	@RequestMapping("/product/{id}")
//	public product getProduct(@PathVariable Double id) 
//	{
//		return proRepository.findById(id).get();
//	}
	@DeleteMapping("/product/{id}")
	public void deleteProduct(@PathVariable Double id){
		proRepository.delete(proRepository.findById(id).get()) ;
	}
	@PutMapping("products/{pid}")
	public product updateProductById(@PathVariable long pid, @RequestBody product prod) {
		if(!proRepository.existsById((double) pid)) {
			throw new RuntimeException("Product doesn't exist with id");
		}
		prod.setpId(pid);
		return proRepository.save(prod);
}
}
