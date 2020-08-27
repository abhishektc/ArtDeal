import { UserService } from './../../../services/user.service';
import { Artist } from './../../../services/artist.model';
import { Paintings } from './../../../services/model/paintings.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements OnInit {

  @Input()
  paintings:Paintings;

  artist:Artist;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getArtistById(this.paintings.artistid).subscribe(
      (Artist) =>{ 
        this.artist = Artist;
      },
      (err: any) => console.log(err)
    );
  }


}
