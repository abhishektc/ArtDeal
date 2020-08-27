import { Artist } from './../account/services/artist.model';
import { AdminService } from 'src/app/account/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../account/services/token-storage.service';
import { UserService } from '../account/services/user.service';
import { Paintings } from '../account/services/model/paintings.model';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paintings: Paintings[];

  paintings1:Paintings[];

  allPaintings:Paintings[];

  j:any = 0;

  artists:Artist[];

  artist10:Artist[];

  topFourArtist:Artist[];

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showArtistBoard = false;
  showUserBoard = false;
  username: string;

  loading:boolean=true;
  error:boolean=false;

  loadingPaint:boolean=true;
  errorPainting:boolean=false;

  totalArtist:any;

  totalUser:any;

  constructor(private tokenStorageService: TokenStorageService, private userService:UserService, private adminService:AdminService, private _router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showArtistBoard = this.roles.includes('ROLE_ARTIST');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }

    this.userService.getTopArtist().subscribe(
      (Artist) =>{ 
        this.artists = Artist
        this.loading = false
      },
      err => {
        this.error=true;
      }

    );

    this.userService.get10Artist().subscribe(
      (Artist) => {
        this.artist10 = Artist;
        for (let i = 0; i < this.artist10.length; i++) {
          this.userService.getAllPaintingsByArtistId(this.artist10[i].id).subscribe(
            (Paintings) => {
              this.paintings1 = Paintings;
              let k=0;
              while (k < this.paintings1.length) {
                this.j = this.j + 1;
                k = k+1;
                
              }

            }
          ); 
        }
      }
    );
    

    this.userService.getAllPaintingsByApproved().subscribe(
      (Paintings)=>{
        this.paintings = Paintings
        this.loadingPaint = false
      },
      err => {
        this.errorPainting=true;
      }
    );
  
    this.adminService.getTotalArtist().subscribe(
      data => this.totalArtist = data
    );

    this.adminService.getTotalUser().subscribe(
      data => this.totalUser = data
    );

  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
