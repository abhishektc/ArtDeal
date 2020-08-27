import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from './../../services/artist.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-artist-profile-view',
  templateUrl: './admin-artist-profile-view.component.html',
  styleUrls: ['./admin-artist-profile-view.component.css']
})
export class AdminArtistProfileViewComponent implements OnInit {
  artists:Artist;
  private _id: any;
  public slide1=true;
  public slide2=false;
  public demo1=false;
  public demo2=true;

  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  public classActiveSlide1={
    "active":this.slide1,
    "demo":this.demo1
  }
  public classActiveSlide2={
    "active":this.slide2,
    "demo":this.demo2
  }


  changeClass1() {
    this.slide1=true;
    this.slide2=false;
    this.demo1=false;
    this.demo2=true;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
  }

  changeClass2() {
    this.slide1=false;
    this.slide2=true;
    this.demo1=true;
    this.demo2=false;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
  }

  constructor(private adminService:AdminService, private _route:ActivatedRoute, private router:Router, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      if (!this.showAdminBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this.router.navigate(['home']);
      }
    }else{
      alert("Sorry, you don't have a permission to access this.");
      this.router.navigate(['home']);
    }
    this._id = this._route.snapshot.paramMap.get('id');
    this.getsArtistById();
  }

  getsArtistById(){
    this.adminService.getArtistById(this._id).subscribe(
      (Artist) => this.artists = Artist,
      (err: any) => console.log(err)
    );
  }

  approveReject(event){
    const value = event.target.value;
    this.artists.id = this.artists.id;
    this.artists.accStatus= value;
    if (this.artists.accStatus==="Approved") {
      this.adminService.artistApprove(this.artists).subscribe(
        () => this.onUpdateSuccess(),
        () => this.onSaveError()
      );
    }
    else {
      this.adminService.deleteArtistById(this.artists.id).subscribe(
        () => this.onUpdateSuccess(),
        () => this.onSaveError()
      );
    }

  }

  onUpdateSuccess(){
    this.router.navigate(['admin/newArtistApproval']);
  }

  onSaveError(){
    alert("Error");
  }
  

}
