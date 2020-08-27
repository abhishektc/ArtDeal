package com.artdeal.mongodb.api.model;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(collection = "artist")
public class Artist {
	
	  @Id
	  private String id;
	  
	  @Size(max = 20)
	  private String username;
	  
	  @Size(max = 20)
	  private String fullname;
	  
	  @Size(max = 50)
	  @Email
	  private String email;
	  
	  private long contact;
	  
	  @Size(max = 10)
	  private String experience;
	  
	  @Size(max = 50)
	  private String qualification;
	  
	  
	  @Size(max = 100)
	  private String website;
	  
	  @Size(max = 50)
	  private String address;

	  @Size(max = 20)
	  private String city;
	
	  @Size(max = 120)
	  private String password;
	  
	  @Size(max = 20)
	  private String isportrait;
	  
	  @Size(max = 20)
	  private String iswallpainter;
	
	  private String filename1;
	  
	  private String filename2;
	  
	  private String profileimage;
	  
	  private float rankReview;
	  
	  private String description;
	  
	  private String accStatus;
	  
	  private byte[] picByteFile1;
	  
	  private byte[] picByteFile2;
	  
	  @DBRef
	  private Set<Role> roles = new HashSet<>();
	  
	  private Price price;
	
	  public Artist() {
	  }
	  
	  public Artist( String username, String fullname, String email, long contact, String experience, String qualification, String website, String address, String city, String password,
			 String isportrait, String iswallpainter, String filename1, String filename2) {
		this.username = username;
		this.fullname = fullname;
		this.email = email;
		this.contact = contact;
		this.experience = experience;
		this.qualification = qualification;
		this.website = website;
		this.address = address;
		this.city = city;
		this.password = password;
		this.isportrait = isportrait;
		this.iswallpainter = iswallpainter;
		this.filename1 = filename1;
		this.filename2 = filename2;
	  }

	  public String getId() {
	    return id;
	  }
	
	  public void setId(String id) {
	    this.id = id;
	  }
	
	  
	  public String getUsername() {
		return username;
	  }
	
	  public void setUsername(String username) {
		this.username = username;
	  }
	
	  public String getFullname() {
		return fullname;
	  }
	
	  public void setFullname(String fullname) {
		this.fullname = fullname;
	  }
	
	  public String getEmail() {
		return email;
	  }
	
	  public void setEmail(String email) {
		 this.email = email;
	  }
	
	  public long getContact() {
		 return contact;
	  }
	
	  public void setContact(long contact) {
		this.contact = contact;
	  }
	
	  public String getExperience() {
		 return experience;
	  }
	
	  public void setExperience(String experience) {
		 this.experience = experience;
	  }
	
	  public String getQualification() {
		return qualification;
	  }
	
	  public void setQualification(String qualification) {
		this.qualification = qualification;
	  }
	
	  public String getWebsite() {
		return website;
	  }
	
	  public void setWebsite(String website) {
		this.website = website;
	  }
	
	  public String getAddress() {
		 return address;
	  }
	
	  public void setAddress(String address) {
		this.address = address;
	  }
	
public String getCity() {
		 return city;
}
	
public void setCity(String city) {
		this.city = city;
}
	
	public String getPassword() {
		return password;  
	}
	
public void setPassword(String password) {
		this.password = password;
}
	
public String getIsportrait() {
		return isportrait;
}
	
public void setIsportrait(String isportrait) {
		this.isportrait = isportrait;
}
	
public String getIswallpainter() {
		return iswallpainter;
}
	
public void setIswallpainter(String iswallpainter) {
		this.iswallpainter = iswallpainter;
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

public String getProfileimage() {
		return profileimage;
}

public void setProfileimage(String profileimage) {
		this.profileimage = profileimage;
}

public float getRankReview() {
		return rankReview;
}

public void setRankReview(float rankReview) {
		this.rankReview = rankReview;
}

	public String getDescription() {
		return description;
}

public void setDescription(String description) {
		this.description = description;
}
	  
	public String getAccStatus() {
	return accStatus;
}

public void setAccStatus(String accStatus) {
	this.accStatus = accStatus;
}

	public Set<Role> getRoles() {
	    return roles;
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

	public void setRoles(Set<Role> roles) {
	    this.roles = roles;
	  }
	  
	public Price getPrice() {
		return price;
	}

	public void setPrice(Price price) {
		this.price = price;
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
