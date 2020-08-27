import { Paintings } from 'src/app/account/services/model/paintings.model';
import { UserService } from 'src/app/account/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-paintings',
  templateUrl: './all-paintings.component.html',
  styleUrls: ['./all-paintings.component.css']
})
export class AllPaintingsComponent implements OnInit {

  paintings:Paintings[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllPaintings().subscribe(
      (Paintings) => this.paintings = Paintings
    );
  }

}
