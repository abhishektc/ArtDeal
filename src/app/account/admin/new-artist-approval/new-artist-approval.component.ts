import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Artist } from '../../services/artist.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-artist-approval',
  templateUrl: './new-artist-approval.component.html',
  styleUrls: ['./new-artist-approval.component.css']
})
export class NewArtistApprovalComponent implements OnInit {

  length:any;

  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  artists:Artist[];
  constructor(private adminService:AdminService, private tokenStorageService:TokenStorageService, private router:Router) { }

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
    this.getNewArtist();
  }

  getNewArtist() {
    this.adminService.getNewArtist().subscribe(
      (Artist) => {
        this.artists = Artist
        this.length = this.artists.length
      }
    );
  }

}
 