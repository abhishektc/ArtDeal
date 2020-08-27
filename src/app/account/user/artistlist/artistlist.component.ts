import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UserService } from '../../services/user.service';
import { Artist } from '../../services/artist.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css']
})
export class ArtistlistComponent implements OnInit {
  artists: Observable<Artist[]>;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.getArtistList();
  }

  getArtistList(){
    this.artists = this.userService.getAllArtist();
  }
  
}
