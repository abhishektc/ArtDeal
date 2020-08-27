import { Artist } from './../../services/artist.model';
import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-profile-and-price',
  templateUrl: './artist-profile-and-price.component.html',
  styleUrls: ['./artist-profile-and-price.component.css']
})
export class ArtistProfileAndPriceComponent implements OnInit {

  artist:Artist;

  private roles: string[];
  isLoggedIn = false;
  showArtistBoard = false;
  userid:any;
  showProfile:boolean = false;
  showPrice:boolean = false;

  doNotMatch:boolean=false;
  isSuccessful = false;
  errorMessage = '';

  portrait:string = "false"; 
  wallpainter:string = "false"; 

  public artistProfile:any = File;



  artistRegisterForm=this.fb.group({
    fullname: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
    contact: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*'), Validators.minLength(10), Validators.maxLength(14)])]),
    experience: new FormControl('', Validators.required),
    qualification: new FormControl('',[Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*')])]),
    website: new FormControl('', Validators.compose([Validators.pattern('https?://.+')])),
    address: new FormControl('', Validators.required),
    city: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
    describe:new FormControl('', Validators.required)
  });

  priceform=this.fb.group({
    portraitprice: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*')])]),
    wallprice: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*')])])
  });



  constructor(private fb:FormBuilder, private artistService:ArtistService, private _router:Router, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userid = user.id;
      this.showArtistBoard = this.roles.includes('ROLE_ARTIST');

      if (!this.showArtistBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this._router.navigate(['home']);
      }
    }else{
      alert("Please login by registered Artist account.");
      this._router.navigate(['artist/login']);
    }

    this.artistService.getArtistByid(this.userid).subscribe(
      (Artist) => this.artist = Artist
    );


  }
  

  editProfile(){
    this.showProfile = true;
    this.showPrice = false;

    this.artistRegisterForm.patchValue({
      fullname: this.artist.fullname,
      contact: this.artist.contact,
      experience: this.artist.experience,
      qualification: this.artist.qualification,
      website: this.artist.website,
      address: this.artist.address,
      city: this.artist.city,
      describe: this.artist.description,
      
    });
  }

  editprice(){
    this.showProfile = false;
    this.showPrice = true;

    this.priceform.patchValue({
      portraitprice: this.artist.price.portraitPrice,
      wallprice: this.artist.price.wallpaintPrice,
      
    });
  }

  // onSelectProfile(event) {
  //   const fileone = event.target.files[0];
  //   this.artistProfile = fileone;
  // }


  saveForm(artistRegisterForm:FormGroup){
    const id = this.userid;
    const fullname = this.artistRegisterForm.get(['fullname'])!.value;
    const contact = this.artistRegisterForm.get(['contact'])!.value;
    const experience = this.artistRegisterForm.get(['experience'])!.value;
    const qualification = this.artistRegisterForm.get(['qualification'])!.value;
    const website = this.artistRegisterForm.get(['website'])!.value;
    const address = this.artistRegisterForm.get(['address'])!.value;
    const city = this.artistRegisterForm.get(['city'])!.value;
    const description = this.artistRegisterForm.get(['describe'])!.value;
      this.artistService.updateArtistById({id, fullname, contact, experience, qualification, website, address, city, description }).subscribe(
        data => {
          this.isSuccessful = true;
          alert("Profile Edited Successfully");
          window.location.reload();
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
  }

  savePriceForm(priceform:FormGroup){
    const id = this.userid;
    const portraitPrice = this.priceform.get(['portraitprice'])!.value;
    const wallpaintPrice = this.priceform.get(['wallprice'])!.value;
    if (this.artist.isportrait === "true" && this.artist.iswallpainter === "true") {
      if (portraitPrice === "" || wallpaintPrice === "") {
        alert("Please fill the price details")
      }
      else
      {
        this.artistService.updatePriceByArtistId({id, price:{ portraitPrice, wallpaintPrice }}).subscribe(
          data => {
            this.isSuccessful = true;
            alert("Price added Successfully");
            window.location.reload();
          },
          err => {
            alert("Error");
          }
        );
      } 
    }
    else if(this.artist.isportrait === "true" && this.artist.iswallpainter === "false"){
      if (portraitPrice === "") {
        alert("Please fill the price details")
      }
      else
      {
        this.artistService.updatePriceByArtistId({id, price:{ portraitPrice }}).subscribe(
          data => {
            this.isSuccessful = true;
            alert("Price added Successfully");
            window.location.reload();
          },
          err => {
            alert("Error");
          }
        );
      } 
    }
    else {
      if (wallpaintPrice === "") {
        alert("Please fill the price details")
      }
      else
      {
        this.artistService.updatePriceByArtistId({id, price:{ wallpaintPrice }}).subscribe(
          data => {
            this.isSuccessful = true;
            alert("Price added Successfully");
            window.location.reload();
          },
          err => {
            alert("Error");
          }
        );
      } 
    }
  }

}
