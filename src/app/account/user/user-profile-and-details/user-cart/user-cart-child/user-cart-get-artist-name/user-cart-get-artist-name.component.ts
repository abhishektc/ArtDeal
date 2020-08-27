import { Artist } from './../../../../../services/artist.model';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/account/services/user.service';

@Component({
  selector: 'app-user-cart-get-artist-name',
  templateUrl: './user-cart-get-artist-name.component.html',
  styleUrls: ['./user-cart-get-artist-name.component.css']
})
export class UserCartGetArtistNameComponent implements OnInit {

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
