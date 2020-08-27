import { User } from './../../../services/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from 'src/app/account/services/artist.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  userid:any;

  user:User;

  constructor(private artistService:ArtistService) { }

  ngOnInit(): void {
    this.artistService.getUserById(this.userid).subscribe(
      (User) => this.user = User
    );
  }

}
