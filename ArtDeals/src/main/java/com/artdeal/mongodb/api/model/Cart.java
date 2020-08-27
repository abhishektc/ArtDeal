package com.artdeal.mongodb.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cart")
public class Cart {
	
	@Id
  	private String id;
  
  	private String userid;
  
  	private String artistid;
  
  	private String paintingsid;
  
  	private String date;

	public Cart() {

	}

	public Cart(String id, String userid, String artistid, String paintingsid, String date) {
		this.id = id;
		this.userid = userid;
		this.artistid = artistid;
		this.paintingsid = paintingsid;
		this.date = date;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	  
	  
}
