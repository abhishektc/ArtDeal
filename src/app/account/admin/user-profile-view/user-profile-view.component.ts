import { User } from './../../services/user.model';
import { TokenStorageService } from './../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.css']
})
export class UserProfileViewComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];

  _id:any;
  totalOrder:any;
  itemCart:any;
  user:User;

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

    this.adminService.getUserById(this._id).subscribe(
      (User) =>{ 
        this.user = (User)
        this.adminService.getTotalOrdersByUserId(this.user.id).subscribe(
          (data) => this.totalOrder = data
        );
        this.adminService.getTotalCartByUserId(this.user.id).subscribe(
          (data) => this.itemCart = data
        );
      }
    );

  }

}
