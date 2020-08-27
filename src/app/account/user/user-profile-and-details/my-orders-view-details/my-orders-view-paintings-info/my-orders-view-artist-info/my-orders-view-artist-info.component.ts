import { Artist } from './../../../../../services/artist.model';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/account/services/user.service';

@Component({
  selector: 'app-my-orders-view-artist-info',
  templateUrl: './my-orders-view-artist-info.component.html',
  styleUrls: ['./my-orders-view-artist-info.component.css']
})
export class MyOrdersViewArtistInfoComponent implements OnInit {

  @Input()
  artistid:any;

  artist:Artist;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getArtistById(this.artistid).subscribe(
      (Artist) => this.artist = Artist
    );
  }

}
