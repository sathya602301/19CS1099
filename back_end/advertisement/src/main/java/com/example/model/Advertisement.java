package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity  
//defining class name as Table name  
@Table  
public class Advertisement {
	@Id
	@Column  
	private int id;
	@Column  
	private int bookid;  
	@Column  
	private String bookname;  
	@Column  
	private String author;
	@Column  
	private int price;  
	@Column  
	private String url;
	public int getIds() {
		return id;
	}
	public void setIds(int id) {
		this.id = id;
	}
	public int getBookid() {
		return bookid;
	}
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
}
