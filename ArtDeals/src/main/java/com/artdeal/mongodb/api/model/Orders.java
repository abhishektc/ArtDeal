package com.artdeal.mongodb.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(collection = "orders")
public class Orders {
	
	@Id
  	private String id;
  
  	private String userid;
  
  	private String artistid;
  
  	private String paintingsid;
  	
  	private String pwtid;
  
  	private String orderDate;
  	
  	private String status;
  	
  	private float rating;
  	
  	private String comment;

	public Orders() {
		
	}

	public Orders(String userid, String artistid, String paintingsid, String pwtid, String orderDate,
			String status, float rating, String comment) {
		this.userid = userid;
		this.artistid = artistid;
		this.paintingsid = paintingsid;
		this.pwtid = pwtid;
		this.orderDate = orderDate;
		this.status = status;
		this.rating = rating;
		this.comment = comment;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getArtistid() {
		return artistid;
	}

	public void setArtistid(String artistid) {
		this.artistid = artistid;
	}

	public String getPaintingsid() {
		return paintingsid;
	}

	public void setPaintingsid(String paintingsid) {
		this.paintingsid = paintingsid;
	}

	public String getPwtid() {
		return pwtid;
	}

	public void setPwtid(String pwtid) {
		this.pwtid = pwtid;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	

}
