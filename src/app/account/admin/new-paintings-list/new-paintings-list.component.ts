import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { Observable } from 'rxjs';
import { IPaintings } from './../../services/model/paintings.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-paintings-list',
  templateUrl: './new-paintings-list.component.html',
  styleUrls: ['./new-paintings-list.component.css']
})
export class NewPaintingsListComponent implements OnInit {
  paintings: IPaintings[];
  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  length:any;

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
    this.getNewPaintings();
  }

  getNewPaintings() {
    this.adminService.getNewPaintings().subscribe(
      (Paintings) => { 
        this.paintings = Paintings
        this.length = this.paintings.length
      }
    );
  }

}
