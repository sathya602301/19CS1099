package com.exampleCart.repository;
import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.exampleCart.model.Cart;
public interface CartRepository extends CrudRepository<Cart, Integer>  {

	List<Cart> findByUserid(String userid);
	

}
