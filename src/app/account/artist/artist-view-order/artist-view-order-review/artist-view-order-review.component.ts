import { Pwt } from 'src/app/account/services/model/portraitwallteach.model';
import { DialogDataReview } from './../artist-view-order.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtistService } from 'src/app/account/services/artist.service';
import { User } from 'src/app/account/services/user.model';
import { Paintings } from 'src/app/account/services/model/paintings.model';

@Component({
  selector: 'app-artist-view-order-review',
  templateUrl: './artist-view-order-review.component.html',
  styleUrls: ['./artist-view-order-review.component.css']
})
export class ArtistViewOrderReviewComponent implements OnInit {

  user:User;

  pwt:Pwt;

  paintings:Paintings;

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogDataReview, private artistService:ArtistService) { }

  ngOnInit(): void {
    this.artistService.getUserById(this.data.userid).subscribe(
      (User) => this.user = User
    );

    
    this.artistService.getPwtById(this.data.pwtid).subscribe(
      (Pwt) => this.pwt = Pwt
    );

    this.artistService.getPaintingsById(this.data.paintingsid).subscribe(
      (Paintings) => this.paintings = Paintings
    );
  }

}
