package com.example.review.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.review.model.Review;


public interface ReviewRepository extends CrudRepository<Review, Integer>  {
	 List<Review> findByBookid(int bookid);
}
