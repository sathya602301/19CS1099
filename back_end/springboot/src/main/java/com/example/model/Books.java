package com.example.model;

import javax.persistence.Column;  
import javax.persistence.Entity;  
import javax.persistence.Id;  
import javax.persistence.Table;  
//mark class as an Entity   
@Entity  
//defining class name as Table name  
@Table  
public class Books  
{  
//Defining book id as primary key  
@Id  
@Column  
private int bookid;  
@Column  
private String author;  
@Column  
private String bookname;  
@Column  
private int price;  
@Column  
private String url;  
@Column  
private String brandname;  
@Column  
private String descs;
@Column  
private String form_factor;
@Column  
private String modelname;
@Column  
private String nsp;
@Column  
private String capacity;

public String getModelname() {
	return modelname;
}
public void setModelname(String modelname) {
	this.modelname = modelname;
}

public String getNsp() {
	return nsp;
}
public void setNsp(String nsp) {
	this.nsp = nsp;
}
public String getForm_factor() {
	return form_factor;
}
public void setForm_factor(String form_factor) {
	this.form_factor = form_factor;
}
public String getCapacity() {
	return capacity;
}
public void setCapacity(String capacity) {
	this.capacity = capacity;
}
public String getDescs() {
	return descs;
}
public void setDescs(String descs) {
	this.descs = descs;
}
public String getBrandname() {
	return brandname;
}
public void setBrandname(String brandname) {
	this.brandname = brandname;
}
public String getUrl() {
	return url;
}
public void setUrl(String url) {
	this.url = url;
}
public int getBookid()   
{  
return bookid;  
}  
public void setBookid(int bookid)   
{  
this.bookid = bookid;  
}  
public String getBookname()  
{  
return bookname;  
}  
public void setBookname(String bookname)   
{  
this.bookname = bookname;  
}  
public String getAuthor()   
{  
return author;  
}  
public void setAuthor(String author)   
{  
this.author = author;  
}  
public int getPrice()   
{  
return price;  
}  
public void setPrice(int price)   
{  
this.price = price;  
}  
}  
