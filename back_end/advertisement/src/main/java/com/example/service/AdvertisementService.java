package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Advertisement;
import com.example.repository.AdvertisementRepository;



@Service
public class AdvertisementService {
	@Autowired  
	AdvertisementRepository booksRepository;  
	//getting all books record by using the method findaAll() of CrudRepository  
	public List<Advertisement> getAllBooks()   
	{  
	List<Advertisement> books = new ArrayList<Advertisement>();  
	booksRepository.findAll().forEach(books1 -> books.add(books1));  
	return books;  
	}  
	//getting a specific record by using the method findById() of CrudRepository  
	public Advertisement getBooksById(int id)   
	{  
	return booksRepository.findById(id).get();  
	}  
	//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Advertisement books)   
	{  
	booksRepository.save(books);  
	}  
	//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id)   
	{  
	booksRepository.deleteById(id);  
	}  
	//updating a record  
	public void update(Advertisement books, int bookid)   
	{  
	booksRepository.save(books);  
	}   

	

	}