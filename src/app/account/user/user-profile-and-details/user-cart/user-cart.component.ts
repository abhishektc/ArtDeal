import { Router } from '@angular/router';
import { User } from './../../../services/user.model';
import { TokenStorageService } from './../../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/account/services/user.service';
import { Cart } from 'src/app/account/services/model/cart.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Paintings } from 'src/app/account/services/model/paintings.model';
import { Orders } from 'src/app/account/services/model/orders.model';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  carts:Cart[];
  length:any;
  private userid:any;
  isLoggedIn = false;
  showUserBoard = false;
  private roles: string[];

  paintings:Paintings[]=[];
  total:any=0;
  showTotal=false;
  showTotalAmount=false;
  deliveryCharge:any=0;
  totalAmount:any=0;
  btnPlaceOrder=true;
  changeAddre = false;

  user:User;

  orders:Orders;
  orderSuccess = false;

  userRegisterForm=this.fb.group({
    address: new FormControl('', Validators.required),
    city: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),

  });

  constructor(private fb:FormBuilder, private _userService:UserService, private tokenStorageService:TokenStorageService, private router:Router) { }

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
    this._userService.getCartByUserId(this.userid).subscribe(
      (Cart) =>{ 
        this.carts= Cart
        this.length = this.carts.length
      }
    );
  }

  removePaintings(cartid){
    this._userService.deleteCartById(cartid).subscribe(
      () => this.onUpdateSuccess(),
      () => this.onSaveError()
    );
  }

  getTotal(){
    for (let i = 0; i < this.carts.length; i++) {
      this._userService.getPaintingsById(this.carts[i].paintingsid).subscribe(
        (Paintings) => this.paintings[i] = Paintings
      );
    }
    this.showTotal=true;

    this._userService.getUserById(this.userid).subscribe(
      (User) => this.user = User
    );
  }

  getTotalAmount(){
    for (let i = 0; i < this.paintings.length; i++) {
      this.deliveryCharge = this.deliveryCharge + 50;
      this.total = this.total + this.paintings[i].price;
      
    }
    this.totalAmount = this.total+this.deliveryCharge;
    this.showTotalAmount = true;
    this.btnPlaceOrder = false;
  }

  changeAddress(){
    this.changeAddre = true;
    this.userRegisterForm.patchValue({
      address: this.user.address,
      city: this.user.city
    });
  }

  userForm(){
      this.user.id = this.userid;
      this.user.address = this.userRegisterForm.get(['address'])!.value;
      this.user.city = this.userRegisterForm.get(['city'])!.value;

      this._userService.changeUserAddressById(this.user).subscribe(
        data => {
          this.changeAddre = false;
          alert("Shipping address has been changed, please confirm by the shipping details");
        }
      );
  }

  confirmOrder(){
    for (let i = 0; i < this.carts.length; i++) {
      const userid = this.carts[i].userid;
      const artistid = this.carts[i].artistid;
      const paintingsid = this.carts[i].paintingsid;
      const orderDate = new Date();

      this._userService.addOrders({userid, artistid, paintingsid, orderDate}).subscribe(
        data =>{
          
          this._userService.deleteCartById(this.carts[i].id).subscribe(
            data1 =>{ 
              this.orderSuccess = true
            }
          );
          const status = "Sold";
          this._userService.updatePaintingsById(paintingsid, status).subscribe(
            () => {
            
            }
          );
        }
      );
    }
    alert("Successfully placed the order. You will get order updates notification. Thank you for shopping, enjoy...");
    window.location.reload();
  
  }

  onUpdateSuccess(){
    alert("Paintings Removed from cart Successfully")
    window.location.reload();
  }

  onSaveError(){
    alert("Error");
  }

}
