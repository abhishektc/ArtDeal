import { Artist } from './../../../services/artist.model';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-order-status-view-artist-name',
  templateUrl: './admin-order-status-view-artist-name.component.html',
  styleUrls: ['./admin-order-status-view-artist-name.component.css']
})
export class AdminOrderStatusViewArtistNameComponent implements OnInit {

  @Input()
  artistid:any;

  artist:Artist;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getArtistById(this.artistid).subscribe(
      (Artist) => this.artist = Artist
    );
  }

}
