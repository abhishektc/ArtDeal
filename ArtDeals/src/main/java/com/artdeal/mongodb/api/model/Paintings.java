package com.artdeal.mongodb.api.model;

import java.io.ByteArrayOutputStream;

import java.io.IOException;
import java.util.Set;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import javax.validation.constraints.NotBlank;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(collection = "paintings")
public class Paintings {

	  @Id
	  private String id;
	  
	  private String artistid;
	  
	  private String title;
	  
	  private String date;
	  
	  private String type;
	  
	  private long price;
	  
	  private String description;
	  
	  private String filename1;
	  
	  private String filename2;
	  
	  private String filename3;
	  
	  private byte[] picByteFile1;
	  
	  private byte[] picByteFile2;
	  
	  private byte[] picByteFile3;
	  
	  private long countView;
	  
	  private String status;
	  
	public Paintings() {
	}

	public Paintings(String artistid, String title, String date, String type, long price, String description) {
		this.artistid = artistid;
		this.title = title;
		this.date = date;
		this.type = type;
		this.price = price;
		this.description = description;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getArtistid() {
		return artistid;
	}

	public void setArtistid(String artistid) {
		this.artistid = artistid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFilename1() {
		return filename1;
	}

	public void setFilename1(String filename1) {
		this.filename1 = filename1;
	}

	public String getFilename2() {
		return filename2;
	}

	public void setFilename2(String filename2) {
		this.filename2 = filename2;
	}

	public String getFilename3() {
		return filename3;
	}

	public void setFilename3(String filename3) {
		this.filename3 = filename3;
	}

	public byte[] getPicByteFile1() {
		return decompressZLib(picByteFile1);
	}

	public void setPicByteFile1(byte[] picByteFile1) {
		this.picByteFile1 = picByteFile1;
	}

	public byte[] getPicByteFile2() {
		return decompressZLib(picByteFile2);
	}

	public void setPicByteFile2(byte[] picByteFile2) {
		this.picByteFile2 = picByteFile2;
	}

	public byte[] getPicByteFile3() {
		return decompressZLib(picByteFile3);
	}

	public void setPicByteFile3(byte[] picByteFile3) {
		this.picByteFile3 = picByteFile3;
	}

	public long getCountView() {
		return countView;
	}

	public void setCountView(long countView) {
		this.countView = countView;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	// uncompress the image bytes before returning it to the angular application
	public static byte[] decompressZLib(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}
	
	  
	  
}
