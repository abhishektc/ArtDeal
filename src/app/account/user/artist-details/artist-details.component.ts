import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { UserService } from './../../services/user.service';
import { Artist } from './../../services/artist.model';
import { TokenStorageService } from './../../services/token-storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Paintings } from '../../services/model/paintings.model';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  artists:Artist;
  paintings: Paintings[];
  length:any;
  private _id: any;
  isLoggedIn = false;
  showUserBoard = false;
  private roles: string[];
  portraitRequest = false;
  wallRequest = false;
  soldPaintingsCount:any;
  fullname:string;
  experience:string;

  loading:boolean = true;

  userid:any;

  public portraitImage:any = File;
  public wallImage:any = File;
  
  portraitForm=this.fb.group({
    portrait: new FormControl('', Validators.required),
    portraitImage:new FormControl('', Validators.required),
  });

  wallForm=this.fb.group({
    wall: new FormControl('', Validators.required),
    wallImage:new FormControl('', Validators.required),
  });

  constructor(private fb:FormBuilder, private _userService:UserService,private _route:ActivatedRoute, private _router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('id');
    this.getsArtistById();
    this.getsPaintingsByArtistId();
    this.getsSoldPaintingsCountByArtistId();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userid = user.id;

      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
  }

  getsArtistById(){
    this._userService.getArtistById(this._id).subscribe(
      (Artist) =>{ this.artists = Artist
        this.fullname=this.artists.fullname
        this.experience = this.artists.experience
        this.loading = false
      },
      (err: any) => { 
        console.log(err)
      }
    );
  }

  getsPaintingsByArtistId(){
    this._userService.getPaintingsByArtistId(this._id).subscribe(
      (Paintings) =>{ 
        this.paintings = Paintings,
        this.length = this.paintings.length
      },
      (err: any) => console.log(err)
    );
  }

  getsSoldPaintingsCountByArtistId(){
    this._userService.getsSoldPaintingsCountByArtistId(this._id).subscribe(
      data => this.soldPaintingsCount = data
    );
  }

  requestLogin() {
    alert("Please LogIn with a register account!");
    this._router.navigate(['/user/login']);
  }

  getPortraitRequest() {
    this.portraitRequest = true;
  }

  selectPortraitImage(event) {
    const portraitImage = event.target.files[0];
    this.portraitImage = portraitImage;
  }

  savePortraitForm(portraitForm:FormGroup) {
    const userid = this.userid;
    const artistid = this.artists.id;
    const type = portraitForm.get('portrait')!.value;
    const price = this.artists.price.portraitPrice;
    // console.log(userid+" "+artistid+" "+type+" "+price+" "+this.portraitImage);
    const formdata = new FormData();
    formdata.append('artistid', artistid);
    formdata.append('userid', userid);
    formdata.append('type', type);
    formdata.append('price', price);
    formdata.append('file1', this.portraitImage);
    this._userService.savePortraitForm(formdata).subscribe(
      data => {
        console.log(data);
        alert("Portrait Request saved successfully!.");
        this.portraitRequest = false;
      },
      err => {
        alert("Failed");
      }
    );
  }

  getWallRequest() {
    this.wallRequest = true;
  }

  selectWallImage(event) {
    const wallImage = event.target.files[0];
    this.wallImage = wallImage;
  }

  saveWallForm(wallForm:FormGroup) {
    const userid = this.userid;
    const artistid = this.artists.id;
    const type = wallForm.get('wall')!.value;
    const price = this.artists.price.wallpaintPrice;
    // console.log(userid+" "+artistid+" "+type+" "+price+" "+this.wallImage);
    const formdata = new FormData();
    formdata.append('artistid', artistid);
    formdata.append('userid', userid);
    formdata.append('type', type);
    formdata.append('price', price);
    formdata.append('file1', this.wallImage);
    this._userService.saveWallpaintForm(formdata).subscribe(
      data => {
        console.log(data);
        alert("Wallpaint Request saved successfully!.");
        this.wallRequest = false;
      },
      err => {
        alert("Failed");
      }
    );
  }

  back() {
    this.wallRequest = false;
    this.portraitRequest = false;
  }

}
