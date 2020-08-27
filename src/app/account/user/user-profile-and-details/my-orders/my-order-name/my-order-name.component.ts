import { UserService } from 'src/app/account/services/user.service';
import { Paintings } from 'src/app/account/services/model/paintings.model';
import { Component, OnInit, Input } from '@angular/core';
import { Pwt } from 'src/app/account/services/model/portraitwallteach.model';

@Component({
  selector: 'app-my-order-name',
  templateUrl: './my-order-name.component.html',
  styleUrls: ['./my-order-name.component.css']
})
export class MyOrderNameComponent implements OnInit {

  @Input()
  paintingsid:any;

  @Input()
  pwtid:any;

  paintings:Paintings;
  pwt:Pwt;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getPaintingsById(this.paintingsid).subscribe(
      (Paintings) => this.paintings = Paintings
    );

    this._userService.getPwtById(this.pwtid).subscribe(
      (Pwt) => this.pwt = Pwt
    );
  }

}
