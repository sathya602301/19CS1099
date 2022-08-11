package com.example.login.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.login.model.Login;  
import com.example.login.repository.LoginRepository; 
//defining the business logic  
@Service  
public class LoginService   
{  
@Autowired  
LoginRepository LoginRepository;  
//getting all books record by using the method findaAll() of CrudRepository  
public List<Login> getAllLogin()   
{  
List<Login> login = new ArrayList<Login>();  
LoginRepository.findAll().forEach(login1 -> login.add(login1));  
return login;  
}  
//getting a specific record by using the method findById() of CrudRepository  
public Login getLoginById(int id)   
{  
return LoginRepository.findById(id).get();  
}  
//saving a specific record by using the method save() of CrudRepository  
public void saveOrUpdate(Login books)   
{  
	LoginRepository.save(books);  
}  
//deleting a specific record by using the method deleteById() of CrudRepository  
public void delete(int id)   
{  
	LoginRepository.deleteById(id);  
}  
//updating a record  
public void update(Login login, int bookid)   
{  
	LoginRepository.save(login);  
}
public List<Login> getByUserid(String userid)   
{  
List<Login> books = new ArrayList<Login>();  
LoginRepository.findByUserid(userid).forEach(books1 -> books.add(books1));  
return books;  
}

}  
