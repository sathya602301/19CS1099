package com.example.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.login.model.Login;
import com.example.login.service.LoginService;
//mark class as Controller  
@RestController

public class LoginController   
{  
@Autowired 
LoginService LoginService;   

@GetMapping("/login")  
private List<Login> getAllLogin()   
{  
return LoginService.getAllLogin();  
}  

@GetMapping("/login/{pid}")  
private Login getLogin(@PathVariable("pid") int pid)   
{  
return LoginService.getLoginById(pid);  
}
@CrossOrigin(origins = "http://localhost:3000")
@DeleteMapping("/login/{pid}")  
private void deleteBook(@PathVariable("pid") int pid)   
{  
	LoginService.delete(pid);  
}  
@CrossOrigin(origins = "http://localhost:3000")
@PostMapping("/logins")  
private int saveBook(@RequestBody Login books)   
{  
LoginService.saveOrUpdate(books);  
return books.getPid();  
}  
@GetMapping("/logins/{userids}")  
private List<Login> getByUserid(@PathVariable("userids") String userids)   
{  
return LoginService.getByUserid(userids);  
} 
}  
