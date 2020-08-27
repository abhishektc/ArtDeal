import { UserService } from 'src/app/account/services/user.service';
import { TokenStorageService } from './../../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/account/services/model/orders.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders:Orders[];
  length:any;
  private userid:any;
  isLoggedIn = false;
  showUserBoard = false;
  private roles: string[];

  constructor(private tokenStorageService:TokenStorageService, private _userService:UserService, private _router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.userid = user.id;
      this.roles = user.roles;
      this.showUserBoard = this.roles.includes('ROLE_USER');
      if (!this.showUserBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this._router.navigate(['home']);
      }
    }else{
      alert("Please login by registered user account.");
      this._router.navigate(['user/login']);
    }
    this._userService.getOrdersByUserId(this.userid).subscribe(
      (Orders) =>{ 
        this.orders = Orders
        this.length = this.orders.length
      }
    );
  }

}
