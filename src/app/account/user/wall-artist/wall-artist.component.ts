import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UserService } from '../../services/user.service';
import { IArtist } from '../../services/artist.model';

@Component({
  selector: 'app-wall-artist',
  templateUrl: './wall-artist.component.html',
  styleUrls: ['./wall-artist.component.css']
})
export class WallArtistComponent implements OnInit {

  artists :Observable<IArtist[]>;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getArtistList();
  }

  getArtistList(){
    this.artists = this.userService.getAllWallArtist();
  }
}
