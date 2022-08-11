package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Advertisement;
import com.example.repository.AdvertisementRepository;
import com.example.service.AdvertisementService;



@RestController 
public class AdvertisementController {
	//autowire the BooksService class  
	@Autowired  
	AdvertisementService booksService;  
	AdvertisementRepository booksRepository; 
	//creating a get mapping that retrieves all the books detail from the database   
	@GetMapping("/ad")  
	private List<Advertisement> getAllBooks()   
	{  
	return booksService.getAllBooks();  
	}  
	//creating a get mapping that retrieves the detail of a specific book  
	@GetMapping("/ad/{id}")  
	private Advertisement getBooks(@PathVariable("id") int id)   
	{  
	return booksService.getBooksById(id);  
	} 
	

	}  
