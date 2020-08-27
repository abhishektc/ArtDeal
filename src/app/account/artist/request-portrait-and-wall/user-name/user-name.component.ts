import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/account/services/user.model';
import { ArtistService } from 'src/app/account/services/artist.service';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

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
