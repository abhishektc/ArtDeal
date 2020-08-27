import { TokenStorageService } from './../../services/token-storage.service';
import { Artist } from './../../services/artist.model';
import { Component, OnInit } from '@angular/core';
import { Paintings } from '../../services/model/paintings.model';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-paintings-view',
  templateUrl: './new-paintings-view.component.html',
  styleUrls: ['./new-paintings-view.component.css']
})

export class NewPaintingsViewComponent implements OnInit {
  paintings:Paintings;
  artists:Artist;
  showUserData=false;
  private _id: any;
  public slide1=true;
  public slide2=false;
  public slide3=false;
  public demo1=false;
  public demo2=true;
  public demo3=true;

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
  public classActiveSlide3={
    "active":this.slide3,
    "demo":this.demo3
  }

  changeClass1() {
    this.slide1=true;
    this.slide2=false;
    this.slide3=false;
    this.demo1=false;
    this.demo2=true;
    this.demo3=true;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
    this.classActiveSlide3={
      "active":this.slide3,
      "demo":this.demo3
    }
  }

  changeClass2() {
    this.slide1=false;
    this.slide2=true;
    this.slide3=false;
    this.demo1=true;
    this.demo2=false;
    this.demo3=true;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
    this.classActiveSlide3={
      "active":this.slide3,
      "demo":this.demo3
    }
  }

  changeClass3() {
    this.slide1=false;
    this.slide2=false;
    this.slide3=true;
    this.demo1=true;
    this.demo2=true;
    this.demo3=false;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
    this.classActiveSlide3={
      "active":this.slide3,
      "demo":this.demo3
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
    this.getPaintingsById();
  }

  getPaintingsById(){
    this.adminService.getPaintingsById(this._id).subscribe(
      (Paintings) => this.paintings = Paintings,
      (err: any) => console.log(err)
    );
  }

  approveReject(event){
    const value = event.target.value;
    this.paintings.status = value;
    if (this.paintings.status==="Approved") {
      this.adminService.paintingsApprove(this.paintings).subscribe(
        () => this.onUpdateSuccess(),
        () => this.onSaveError()
      );
    }
    else {
      this.adminService.deletePaintingsById(this.paintings.id).subscribe(
        () => this.onUpdateSuccess(),
        () => this.onSaveError()
      );
    }

  }

  onUpdateSuccess(){
    this.router.navigate(['admin/newPaintingsList']);
  }

  onSaveError(){
    alert("Error");
  }

  getUserdata(){
      console.log(this.paintings.artistid);
      this.adminService.getArtistById(this.paintings.artistid).subscribe(
        (Artist) =>{ 
          this.artists = Artist;
          this.showUserData=true;
        },
        (err: any) => console.log(err)
      );
  }
}
