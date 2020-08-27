import { Artist } from './../../../services/artist.model';
import { UserService } from 'src/app/account/services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painting-artist-name',
  templateUrl: './painting-artist-name.component.html',
  styleUrls: ['./painting-artist-name.component.css']
})
export class PaintingArtistNameComponent implements OnInit {

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
