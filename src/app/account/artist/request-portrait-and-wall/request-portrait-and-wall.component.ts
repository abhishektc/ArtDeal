import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { ArtistService } from '../../services/artist.service';
import { Pwt } from '../../services/model/portraitwallteach.model';

@Component({
  selector: 'app-request-portrait-and-wall',
  templateUrl: './request-portrait-and-wall.component.html',
  styleUrls: ['./request-portrait-and-wall.component.css']
})
export class RequestPortraitAndWallComponent implements OnInit {

  portraits: Pwt[];
  wallPaints: Pwt[];

  private roles: string[];
  isLoggedIn = false;
  showArtistBoard = false;
  userid:any;
  constructor(private tokenStorageService:TokenStorageService, private artistService:ArtistService, private _router:Router) { }

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
    this.artistService.getPortraitRequestByArtistId(this.userid).subscribe(
      (Pwt) => this.portraits = Pwt
    );

    this.artistService.getWallpaintRequestByArtistId(this.userid).subscribe(
      (Pwt) => this.wallPaints = Pwt
    );

  }

}
