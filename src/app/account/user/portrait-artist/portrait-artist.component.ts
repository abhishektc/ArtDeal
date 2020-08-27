import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UserService } from '../../services/user.service';
import { IArtist } from '../../services/artist.model';
@Component({
  selector: 'app-portrait-artist',
  templateUrl: './portrait-artist.component.html',
  styleUrls: ['./portrait-artist.component.css']
})
export class PortraitArtistComponent implements OnInit {

  artists :Observable<IArtist[]>;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getArtistList();
  }

  getArtistList(){
    this.artists = this.userService.getAllPortraitArtist();
  }

}
