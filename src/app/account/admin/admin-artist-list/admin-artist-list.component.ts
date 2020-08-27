import { Router } from '@angular/router';
import { IArtist } from './../../services/artist.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from 'src/app/account/services/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-admin-artist-list',
  templateUrl: './admin-artist-list.component.html',
  styleUrls: ['./admin-artist-list.component.css']
})
export class AdminArtistListComponent implements OnInit {

  artist:IArtist[];

  private userid:any;
  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  constructor(private adminService:AdminService, private tokenStorageService:TokenStorageService, private router:Router) { }

  displayedColumns: string[] = ['id', 'fullname', 'email', 'contact', 'action'];
  dataSource;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userid = user.id;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      if (!this.showAdminBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this.router.navigate(['home']);
      }
    }else{
      alert("Sorry, you don't have a permission to access this.");
      this.router.navigate(['home']);
    }
    
    
    this.adminService.getAllArtist().subscribe(
      (IArtist) =>{ this.artist = IArtist
        this.dataSource =new MatTableDataSource<IArtist>(this.artist)
        this.dataSource.paginator = this.paginator;
      }
    );
  }


  deleteArtist(id:any) {
    this.adminService.deleteArtistById(id).subscribe(
      data =>{
        alert("Successfully deleted the Artist account.");
        window.location.reload();
      }
    );
  }

}
