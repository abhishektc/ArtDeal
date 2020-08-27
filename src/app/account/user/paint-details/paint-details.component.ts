import { ICart } from './../../services/model/cart.model';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { UserService } from './../../services/user.service';
import { Paintings } from '../../services/model/paintings.model';
import { Artist } from '../../services/artist.model';
import { Cart } from '../../services/model/cart.model';

@Component({
  selector: 'app-paint-details',
  templateUrl: './paint-details.component.html',
  styleUrls: ['./paint-details.component.css']
})
export class PaintDetailsComponent implements OnInit {
  paintings:Paintings;
  cart:ICart;
  private _id: any;
  private userid:any;
  isLoggedIn = false;
  showUserBoard = false;
  private roles: string[];

  public slide1=true;
  public slide2=false;
  public slide3=false;
  public demo1=false;
  public demo2=true;
  public demo3=true;

  public classActiveSlide1={
    "active":this.slide1,
    "demo":this.demo1
  }
  public classActiveSlide2={
    "active":this.slide2,
    "demo":this.demo2
  }
  public classActiveSlide3={
    "active":this.slide3,
    "demo":this.demo3
  }

  changeClass1() {
    this.slide1=true;
    this.slide2=false;
    this.slide3=false;
    this.demo1=false;
    this.demo2=true;
    this.demo3=true;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
    this.classActiveSlide3={
      "active":this.slide3,
      "demo":this.demo3
    }
  }

  changeClass2() {
    this.slide1=false;
    this.slide2=true;
    this.slide3=false;
    this.demo1=true;
    this.demo2=false;
    this.demo3=true;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
    this.classActiveSlide3={
      "active":this.slide3,
      "demo":this.demo3
    }
  }

  changeClass3() {
    this.slide1=false;
    this.slide2=false;
    this.slide3=true;
    this.demo1=true;
    this.demo2=true;
    this.demo3=false;
    this.classActiveSlide1={
      "active":this.slide1,
      "demo":this.demo1
    }
    this.classActiveSlide2={
      "active":this.slide2,
      "demo":this.demo2
    }
    this.classActiveSlide3={
      "active":this.slide3,
      "demo":this.demo3
    }
  }

  constructor(private _userService:UserService,private _route:ActivatedRoute, private _router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('id');
    this.getPaintingsById();

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userid = user.id;
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
  }

  getPaintingsById(){
    this._userService.getPaintingsById(this._id).subscribe(
      (Paintings) => {
        this.paintings = Paintings;
        const id = this._id;
        const countView = this.paintings.countView + 1;
        this._userService.updatePaintingsViewCount({id,countView}).subscribe(
        );
      },
      (err: any) => console.log(err)
    );
  }

  requestLogin() {
    alert("Please LogIn with a register account!");
    this._router.navigate(['/user/login']);
  }

  addToCart(event){
    const value = event.target.value;
    const userid= this.userid;
    const artistid = this.paintings.artistid;
    const paintingsid = this.paintings.id;
    const date= new Date();
    if (value==="buyNow") {
      this._userService.addCart({userid,artistid,paintingsid,date}).subscribe(
        data => {
          console.log(data);
          this._router.navigate(['/user/cart']);
        },
        err => {
          const error = err.error.message;
          if(error==="exists"){
            alert("This painting is already exist in your cart. Please checkout from your cart");
          }else{
            alert("Error");
          }
        }
      );
    } else {
      this._userService.addCart({userid,artistid,paintingsid,date}).subscribe(
        data => {
          console.log(data);
          alert("Painting added to the cart.");
        },
        err => {
          const error = err.error.message;
          if(error==="exists"){
            alert("This painting is already exist in your cart");
          }else{
            alert("Error");
          }
        }
      );
    }
  }


}
