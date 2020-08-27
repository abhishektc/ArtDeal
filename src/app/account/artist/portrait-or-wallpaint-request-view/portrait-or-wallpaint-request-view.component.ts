import { TokenStorageService } from './../../services/token-storage.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../services/artist.service';
import { Pwt } from '../../services/model/portraitwallteach.model';

@Component({
  selector: 'app-portrait-or-wallpaint-request-view',
  templateUrl: './portrait-or-wallpaint-request-view.component.html',
  styleUrls: ['./portrait-or-wallpaint-request-view.component.css']
})
export class PortraitOrWallpaintRequestViewComponent implements OnInit {

  _id:any;

  pwt:Pwt;

  private roles: string[];
  isLoggedIn = false;
  showArtistBoard = false;
  userid:any;

  constructor(private artistService:ArtistService, private _route:ActivatedRoute, private tokenStorageService:TokenStorageService, private _router:Router) { }

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
    this._id = this._route.snapshot.paramMap.get('id');

    this.artistService.getPwtById(this._id).subscribe(
      (Pwt) => this.pwt = Pwt
    );


  }

  portraitWallpaintRequestAcceptOrReject(event){
    const value = event.target.value;
    console.log(value);
    
    if (value === 'WAccept') {
      this.pwt.status = "FinalAccept";
      this.artistService.portraitWallpaintRequestAcceptOrReject(this.pwt).subscribe(
        () => alert('The Wallpainting request is accepted.Please go through the client wall to get to know the painting ideas like the width and height and type of painting colors etc.')
      );
    } else if(value === 'PAccept') {
      this.pwt.status = "FinalAccept";
      this.artistService.portraitWallpaintRequestAcceptOrReject(this.pwt).subscribe(
        data =>{
          const userid = this.pwt.userid;
          const artistid = this.pwt.artistid;
          const pwtid = this.pwt.id;
          const status = "Artist Accepted";
          const orderDate = new Date();
          this.artistService.addOrders({userid, artistid, pwtid, orderDate, status}).subscribe(
            () => alert('The portrait request is accepted. Please deliver the painting to the client address. And download the image')
          );
        }
      );
    }
    else {
      this.pwt.status = "Reject";
      this.artistService.portraitWallpaintRequestAcceptOrReject(this.pwt).subscribe(

      );
    }
  }



}
