import { Orders } from './../../../services/model/orders.model';
import { Pwt } from './../../../services/model/portraitwallteach.model';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../../services/token-storage.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {

  pwts:Pwt[];
  orders:Orders[];

  private userid:any;
  isLoggedIn = false;
  showUserBoard = false;
  private roles: string[];

  constructor(private userService:UserService, private tokenStorageService:TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userid = user.id;
      this.showUserBoard = this.roles.includes('ROLE_USER');
      if (!this.showUserBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this.router.navigate(['home']);
      }
    }else{
      alert("Please login by registered user account.");
      this.router.navigate(['user/login']);
    }

    this.userService.getPwtByUserId(this.userid).subscribe(
      (Pwt) => this.pwts = Pwt
    );

    this.userService.getOrdersByUserId(this.userid).subscribe(
      (Orders) => this.orders = Orders
    );
  }

}
