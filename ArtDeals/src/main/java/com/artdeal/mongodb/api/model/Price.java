package com.artdeal.mongodb.api.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Price {
	
	private int portraitPrice;
	
	private int wallpaintPrice;
	
	private int teachPrice;

	public int getPortraitPrice() {
		return portraitPrice;
	}

	public void setPortraitPrice(int portraitPrice) {
		this.portraitPrice = portraitPrice;
	}

	public int getWallpaintPrice() {
		return wallpaintPrice;
	}

	public void setWallpaintPrice(int wallpaintPrice) {
		this.wallpaintPrice = wallpaintPrice;
	}

	public int getTeachPrice() {
		return teachPrice;
	}

	public void setTeachPrice(int teachPrice) {
		this.teachPrice = teachPrice;
	}
	
	
}
