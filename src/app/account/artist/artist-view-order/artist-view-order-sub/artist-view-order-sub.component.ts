import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from 'src/app/account/services/artist.service';
import { User, IUser } from 'src/app/account/services/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ArtistViewOrderUserDetailsComponent } from './artist-view-order-user-details/artist-view-order-user-details.component';

@Component({
  selector: 'app-artist-view-order-sub',
  templateUrl: './artist-view-order-sub.component.html',
  styleUrls: ['./artist-view-order-sub.component.css']
})
export class ArtistViewOrderSubComponent implements OnInit {

  @Input()
  userid:any;
  

  user:IUser;

  constructor(private artistService:ArtistService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.artistService.getUserById(this.userid).subscribe(
      (User) => this.user = User
    );

  }

  openDialog() {
    this.dialog.open(ArtistViewOrderUserDetailsComponent,
      {
        data: {
          userName:this.user.fullname,
          userEmail:this.user.email,
          userContact:this.user.contact,
          userAddress:this.user.address,
          userCity:this.user.city
        }
      });
  }

}

export interface DialogData{
  userName?:string;
  userEmail?:any;
  userContact?:any;
  userAddress?:string;
  userCity?:string
}
