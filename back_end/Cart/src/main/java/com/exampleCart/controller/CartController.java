package com.exampleCart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exampleCart.model.Cart;
import com.exampleCart.repository.CartRepository;
import com.exampleCart.service.CartService;


@RestController  
public class CartController {
//autowire the BooksService class  
@Autowired  
CartService booksService;  
CartRepository booksRepository; 
//creating a get mapping that retrieves all the books detail from the database   
@GetMapping("/cart")  
private List<Cart> getAllBooks()   
{  
return booksService.getAllBooks();  
}  
//creating a get mapping that retrieves the detail of a specific book  
@GetMapping("/cart/{bookid}")  
private Cart getBooks(@PathVariable("bookid") int bookid)   
{  
return booksService.getBooksById(bookid);  
} 
@CrossOrigin(origins = "http://localhost:3000")
@DeleteMapping("/cart/{bookid}")  
private void deleteBook(@PathVariable("bookid") int bookid)   
{  
booksService.delete(bookid);  
}  

//creating post mapping that post the book detail in the database 
@CrossOrigin(origins = "http://localhost:3000")
@PostMapping("/Carts")  
private int saveBook(@RequestBody Cart books)   
{  
booksService.saveOrUpdate(books);  
return books.getBookid();  
}  
//creating put mapping that updates the book detail   
@PutMapping("/Carts")  
private Cart update(@RequestBody Cart books)   
{  
booksService.saveOrUpdate(books);  
return books;  
}
@GetMapping("/cartvs/{userids}")  
private List<Cart> getByUserid(@PathVariable("userids") String userids)   
{  
return booksService.getByUserid(userids);  
} 

}  
