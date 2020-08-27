import { UserService } from 'src/app/account/services/user.service';
import { Artist } from './../../account/services/artist.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-artist-name',
  templateUrl: './home-artist-name.component.html',
  styleUrls: ['./home-artist-name.component.css']
})
export class HomeArtistNameComponent implements OnInit {

  @Input()
  artistid:any;

  artist:Artist;

  artistFullname:String;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getArtistById(this.artistid).subscribe(
      (Artist)  =>{ 
        this.artist = Artist,
        this.artistFullname = this.artist.fullname
      }
    );
  }

}
