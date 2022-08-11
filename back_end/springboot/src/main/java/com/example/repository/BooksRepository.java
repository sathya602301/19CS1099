package com.example.repository;

import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.model.Books;
//repository that extends CrudRepository  
public interface BooksRepository extends CrudRepository<Books, Integer>  
{  
	//@Query("select u from books u where u.bookname = ?1")
	  List<Books> findByBookname(String bookname);
	
}  
