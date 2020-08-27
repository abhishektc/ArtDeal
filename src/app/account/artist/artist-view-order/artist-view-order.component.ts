import { Router } from '@angular/router';
import { Artist } from './../../services/artist.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Orders } from '../../services/model/orders.model';
import { MatDialog } from '@angular/material/dialog';
import { ArtistViewOrderReviewComponent } from './artist-view-order-review/artist-view-order-review.component';


@Component({
  selector: 'app-artist-view-order',
  templateUrl: './artist-view-order.component.html',
  styleUrls: ['./artist-view-order.component.css']
})
export class ArtistViewOrderComponent implements OnInit {

  orders:Orders[];

  order:Orders;

  private roles: string[];
  isLoggedIn = false;
  showArtistBoard = false;
  userid:any;

  formsStatus = this.fb.group({
    status: new FormControl('', Validators.required),

  });
  
  constructor(private fb:FormBuilder,private _router:Router, private artistService:ArtistService,private tokenStorageService:TokenStorageService, public dialog:MatDialog) {
    
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userid = user.id;
      this.showArtistBoard = this.roles.includes('ROLE_ARTIST');

      if (!this.showArtistBoard) {
        alert("Sorry, you don't have a permission to access this.");
        this._router.navigate(['home']);
      }
    }else{
      alert("Please login by registered Artist account.");
      this._router.navigate(['artist/login']);
    }

    this.artistService.getOrdersByArtistId(this.userid).subscribe(
      (Orders) => this.orders = Orders 
    );
  }

  myFunction(id) {
    var popup = document.getElementById("myPopup"+id);
    popup.classList.toggle("show");
  }

  acceptOrReject(orderid:any,value:string,paintingsid:any){
    if (value==='Accept') {
      const statusO = "Ready to move";
      this.artistService.updateOrderById(orderid, statusO).subscribe(
        () => {
          alert("Order Accepted successfully, please update the delivery status time to time.");
          window.location.reload();

        }
      );


    } else {
        const statusO = "Artist Rejected";
        this.artistService.updateOrderById(orderid, statusO ).subscribe(
          () => {
            const status = "Approved";
            this.artistService.updatePaintingsById(paintingsid, status).subscribe(
              () => {
                alert("'Your not ready to deliver or sale, okay!'");
                window.location.reload();
              }
            );
          }
        );
    }
  }

  acceptOrRejectPwt(orderid, value:string){
    if (value==='Accept') {
      const statusO = "Ready to move";
      this.artistService.updateOrderById(orderid, statusO).subscribe(
        () => {
          alert("Order Accepted successfully, please update the delivery status time to time.");
          window.location.reload();

        }
      );


    } else {
        const statusO = "Artist Rejected";
        this.artistService.updateOrderById(orderid, statusO ).subscribe(
          () => {
            alert("'Your not ready to deliver or sale, okay!'");
            window.location.reload();

          }
        );
    }
  }

  formStat(formsStatus:FormGroup, orderids:any){
    const status = this.formsStatus.get(['status'])!.value;
    this.artistService.updateOrderById(orderids, status).subscribe(
      () => {
        alert("Order status updated successfully.")
        window.location.reload();
      }
    );

  }

  openDialog1(paintingsid:any, pwtid:any, userid:any, rating:any, comment:string){
    if(paintingsid){
      this.dialog.open(ArtistViewOrderReviewComponent,
      {
        data: {
          paintingsid:paintingsid,
          userid:userid,
          rating:rating,
          status:status,
          comment:comment
        }
      });

    }
    if (pwtid) {
      this.dialog.open(ArtistViewOrderReviewComponent,
        {
          data: {
            pwtid:pwtid,
            userid:userid,
            rating:rating,
            status:status,
            comment:comment
          }
        });
    }

  }

}

export interface DialogDataReview{
  paintingsid?:any;
  pwtid?:any;
  userid?:any;
  rating?:any;
  status?:string;
  comment?:string
}
