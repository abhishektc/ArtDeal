import { UserService } from './../../../../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paintings } from 'src/app/account/services/model/paintings.model';
import { Pwt } from 'src/app/account/services/model/portraitwallteach.model';

@Component({
  selector: 'app-my-orders-view-paintings-info',
  templateUrl: './my-orders-view-paintings-info.component.html',
  styleUrls: ['./my-orders-view-paintings-info.component.css']
})
export class MyOrdersViewPaintingsInfoComponent implements OnInit {

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
