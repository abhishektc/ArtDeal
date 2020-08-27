import { Component, OnInit, Input } from '@angular/core';
import { Paintings } from 'src/app/account/services/model/paintings.model';
import { UserService } from 'src/app/account/services/user.service';

@Component({
  selector: 'app-user-cart-child',
  templateUrl: './user-cart-child.component.html',
  styleUrls: ['./user-cart-child.component.css']
})
export class UserCartChildComponent implements OnInit {

  @Input()
  paintingsid:any;

  paintings:Paintings;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getPaintingsById(this.paintingsid).subscribe(
      (Paintings) => this.paintings = Paintings
    );
  }

}
