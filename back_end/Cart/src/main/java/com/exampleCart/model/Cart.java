package com.exampleCart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity  
//defining class name as Table name  
@Table  

public class Cart {
//Defining book id as primary key  
@Id
@Column  
private int ids;
@Column  
private String userid;
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
	return ids;
}
public void setIds(int ids) {
	this.ids = ids;
}
public String getUserid() {
	return userid;
}
public void setUserid(String userid) {
	this.userid = userid;
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

