package com.artdeal.mongodb.api.model;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(collection = "portraitWallTeach")
public class PortraitWallTeach {

	@Id
	private String id;
	
	private String artistid;
	
	private String userid;
	
    private String portrait;
	
	private String wallpaint;
	
	private String teach;
	
	private String type;
	
	private String filename;
	
	private byte[] picByteFile1;
	
	private int price;
	
	private String status;
	
	
	public PortraitWallTeach() {

	}

	public PortraitWallTeach(String artistid, String userid, String portrait, String wallpaint, String teach,
			String type,  int price, String status) {
		this.artistid = artistid;
		this.userid = userid;
		this.portrait = portrait;
		this.wallpaint = wallpaint;
		this.teach = teach;
		this.type = type;
		this.price = price;
		this.status = status;
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

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPortrait() {
		return portrait;
	}

	public void setPortrait(String portrait) {
		this.portrait = portrait;
	}

	public String getWallpaint() {
		return wallpaint;
	}

	public void setWallpaint(String wallpaint) {
		this.wallpaint = wallpaint;
	}

	public String getTeach() {
		return teach;
	}

	public void setTeach(String teach) {
		this.teach = teach;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public byte[] getPicByteFile1() {
		return decompressZLib(picByteFile1);
	}

	public void setPicByteFile1(byte[] picByteFile1) {
		this.picByteFile1 = picByteFile1;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
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
