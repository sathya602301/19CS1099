package com.example.login.repository;
import java.util.List;

import org.springframework.data.repository.CrudRepository;  
import com.example.login.model.Login;
//repository that extends CrudRepository  
public interface LoginRepository extends CrudRepository<Login, Integer>  
{  
	List<Login> findByUserid(String userid);
}  
