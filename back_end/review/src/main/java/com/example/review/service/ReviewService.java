package com.example.review.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.review.model.Review;
import com.example.review.repository.ReviewRepository;



@Service
public class ReviewService {
	@Autowired  
	ReviewRepository booksRepository;  
	//getting all books record by using the method findaAll() of CrudRepository  
	public List<Review> getAllBooks()   
	{  
	List<Review> books = new ArrayList<Review>();  
	booksRepository.findAll().forEach(books1 -> books.add(books1));  
	return books;  
	}  
	//getting a specific record by using the method findById() of CrudRepository  
	public Review getBooksById(int id)   
	{  
	return booksRepository.findById(id).get();  
	}  
	//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Review books)   
	{  
	booksRepository.save(books);  
	}  
	//deleting a specific record by using the method deleteById() of CrudRepository  

	public List<Review> getBooksbybookid(int bookid)   
	{  
	List<Review> books = new ArrayList<Review>();  
	booksRepository.findByBookid(bookid).forEach(books1 -> books.add(books1));  
	return books;  
	}
	
	}
	  

