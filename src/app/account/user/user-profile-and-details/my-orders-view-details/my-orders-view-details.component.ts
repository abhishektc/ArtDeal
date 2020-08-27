import { TokenStorageService } from './../../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/account/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Orders } from 'src/app/account/services/model/orders.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-orders-view-details',
  templateUrl: './my-orders-view-details.component.html',
  styleUrls: ['./my-orders-view-details.component.css']
})
export class MyOrdersViewDetailsComponent implements OnInit {

  _id:any;
  orders:Orders;
  reviewsShow:boolean = false;
  isLoggedIn:any;
  showUserBoard = false;
  private roles: string[];

  reviews=this.fb.group({
    rate: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  constructor(private _userService:UserService,private _route:ActivatedRoute, private _router: Router, private fb:FormBuilder, private  tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
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

    this._id = this._route.snapshot.paramMap.get('id');
    
    this._userService.getOrderById(this._id).subscribe(
      (Orders) => this.orders = Orders
    );

  }

  reviewForm(){
    this.orders.rating = this.reviews.get(['rate'])!.value;
    this.orders.comment = this.reviews.get(['comment'])!.value;
    this._userService.updateReviewsById(this.orders).subscribe(
      data => {
        alert("Your Reviews Added Successfully.");
      }
    );
    this.reviewsShow = false;
    window.location.reload();
  }

  editReview(){
    this.reviewsShow = true;
  }

  cancelOrder(){
    if (this.orders.paintingsid) {
      console.log("Paintings");
      const statusO = "Order Cancelled";
      this._userService.updateOrderById(this.orders.id, statusO ).subscribe(
        () => {
          const status = "Approved";
          this._userService.updatePaintingsById(this.orders.paintingsid, status).subscribe(
            () => {
              alert("Order cancelled successfully.");
              this._router.navigate(['user/myOrders']);
            }
          );
        }
      );
    } else {
      console.log("Portrait");
      const statusO = "Order Cancelled";
      this._userService.updateOrderById(this.orders.id, statusO ).subscribe(
        () => {
          alert("Order cancelled successfully.");
          this._router.navigate(['user/myOrders']);
        }
      );
    }
  }


}
