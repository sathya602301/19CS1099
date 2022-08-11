package com.example.review.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.review.model.Review;
import com.example.review.repository.ReviewRepository;
import com.example.review.service.ReviewService;





@RestController 
public class ReviewController {
	@Autowired  
	ReviewService booksService;  
	ReviewRepository booksRepository; 
	//creating a get mapping that retrieves all the books detail from the database   
	@GetMapping("/review")  
	private List<Review> getAllBooks()   
	{  
	return booksService.getAllBooks();  
	}  
	//creating a get mapping that retrieves the detail of a specific book  
	@GetMapping("/reviews/{id}")  
	private Review getBooks(@PathVariable("id") int id)   
	{  
		return booksService.getBooksById(id);  
	} 
	
	//creating post mapping that post the book detail in the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/review")  
	private int saveBook(@RequestBody Review books)   
	{  
	booksService.saveOrUpdate(books);  
	return books.getId();  
	}  
	@GetMapping("/review/{bookid}")  
	private List<Review> getbyBooksname(@PathVariable("bookid") int bookid)   
	{  
	return booksService.getBooksbybookid(bookid);  
	} 

	}  
