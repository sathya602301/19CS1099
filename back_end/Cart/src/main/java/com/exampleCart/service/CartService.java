package com.exampleCart.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exampleCart.model.Cart;
import com.exampleCart.repository.CartRepository;


@Service  
public class CartService {
@Autowired  
CartRepository booksRepository;  
//getting all books record by using the method findaAll() of CrudRepository  
public List<Cart> getAllBooks()   
{  
List<Cart> books = new ArrayList<Cart>();  
booksRepository.findAll().forEach(books1 -> books.add(books1));  
return books;  
}  
//getting a specific record by using the method findById() of CrudRepository  
public Cart getBooksById(int id)   
{  
return booksRepository.findById(id).get();  
}  
//saving a specific record by using the method save() of CrudRepository  
public void saveOrUpdate(Cart books)   
{  
booksRepository.save(books);  
}  
//deleting a specific record by using the method deleteById() of CrudRepository  
public void delete(int id)   
{  
booksRepository.deleteById(id);  
}  
//updating a record  
public void update(Cart books, int bookid)   
{  
booksRepository.save(books);  
}   

public List<Cart> getByUserid(String userid)   
{  
List<Cart> books = new ArrayList<Cart>();  
booksRepository.findByUserid(userid).forEach(books1 -> books.add(books1));  
return books;  
}

}
  

