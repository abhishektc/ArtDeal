import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../artist-view-order-sub.component';

@Component({
  selector: 'app-artist-view-order-user-details',
  templateUrl: './artist-view-order-user-details.component.html',
  styleUrls: ['./artist-view-order-user-details.component.css']
})
export class ArtistViewOrderUserDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit(): void {
  }

}
